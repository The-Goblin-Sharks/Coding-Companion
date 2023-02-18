/* eslint-disable */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers.js');
const leetcodeController = require('../controllers/leetcodeController');


router.get('/login/:username&:password', userController.login, leetcodeController.getUpdatedStats, (req, res) => {
	res.status(200).json(res.locals.passwordIsInvalid);
});
// { password: res.locals.passwordIsValid,
// leetCodeStats: res.locals.leetCodeStats }

// router.get('/admin', userController.adminLogin, (req, res) => {
// 	res.send(200).json(res.locals.adminProfile);
// });

router.get('/leetcode', leetcodeController.getUpdatedStats, (req, res) => {
  res.status(200).json(res.locals.submitStats);
});

router.post('/signup', userController.signup, (req, res) => {
	if (res.locals.userIsTaken) res.status(200).send('User is taken.');
	res.status(200).json(res.locals.currentUser);
})



module.exports = router;