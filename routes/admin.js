const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body.title);
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.router = router;
exports.products = products;