const express = require('express')
//const login = require('./login')
const register = require('./register')
const router = express.Router();


router.use('/register',register);
//router.use('/login',login);
//router.use('/userhome',user);

module.exports = router;