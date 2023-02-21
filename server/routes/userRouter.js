/* eslint-disable */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers.js');
const leetcodeController = require('../controllers/leetcodeController');


router.get('/login/:username&:password', userController.login, leetcodeController.getUpdatedStats, userController.updateStats, userController.gainCurrency, (req, res) => {
	res.status(200).json({problemDiff : res.locals.problemDiff, currentUser : res.locals.currentUser, gainedCurrency : res.locals.gainedCurrency});
	// send gained currency, send problemdiff, send updated userinfo
});
// { password: res.locals.passwordIsValid,
// leetCodeStats: res.locals.leetCodeStats }

// router.get('/admin', userController.adminLogin, (req, res) => {
// 	res.send(200).json(res.locals.adminProfile);
// });

router.post('/signup', userController.signup, leetcodeController.getUpdatedStats, userController.updateStats, userController.gainCurrency, (req, res) => {
	res.status(200).json({problemDiff : res.locals.problemDiff, currentUser : res.locals.currentUser, gainedCurrency : res.locals.gainedCurrency});
})



module.exports = router;