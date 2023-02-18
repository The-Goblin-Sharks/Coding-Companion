/* eslint-disable */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers.js');


router.post('/signup', userController.signup, (req, res) => {
	res.send(201).json({info: 'here'});
});

router.get('/login', userController.login, (req, res) => {
	res.send(200).json({info: 'here'});
});

router.get('/admin', userController.adminLogin, (req, res) => {
	res.send(200).json({info: 'here'});
});



module.exports = router;