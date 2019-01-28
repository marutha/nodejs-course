const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];


// /admin/add-product => POST
router.post('/add-user', (req, res, next) => {
  console.log('pushing users' + req.body.name);
  users.push({ name: req.body.name });
  res.redirect('/');
});

router.get('/users', (req, res, next) => {
  console.log('users', users);
  res.render('users', {
    docTitle: 'User List',
    users: users,
    path: '/users'
  });
});

exports.routes = router;
exports.users = users;
