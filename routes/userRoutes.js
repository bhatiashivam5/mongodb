var express = require('express');

var myctrl = require('../controllers/userController');
var approute=express.Router();

approute.post('/newUser',myctrl.addnew);

module.exports = approute;