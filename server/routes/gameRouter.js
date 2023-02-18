const express = require('express');
const gameController = require('../controllers/gameControllers.js');
const router = express.Router();



router.get('/', gameController.load, (req, res) => {
	res.status(200).json(res.locals.initialLoad);
});





module.exports = router;