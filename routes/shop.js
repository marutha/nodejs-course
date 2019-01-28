const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = adminData.users;
  res.render('add-user', {
    users: users,
    docTitle: 'Users',
    path: '/',
    activeUsers: true,
    productCSS: true
  });
});

module.exports = router;
