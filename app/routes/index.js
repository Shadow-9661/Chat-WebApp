const express = require('express')
const login = require('./login')
const register = require('./register')
const messages = require('./messages')
const sendMessage = require('./messages')
const router = express.Router();


router.use('/register',register);
router.use('/login',login);
router.use('/loadchats',messages);
router.use('/send',sendMessage)

module.exports = router;