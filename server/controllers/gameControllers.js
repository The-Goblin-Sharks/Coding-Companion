/* eslint-disable */
const db = require('../models/dbModel');



const gameController = {};



gameController.load = async (req, res, next) => {
  res.locals.initialLoad = []
try {
  const backgroundResponse = await db.query('SELECT * FROM background')
  res.locals.initialLoad.push(backgroundResponse.rows);
  const toyResponse = await db.query('SELECT * FROM food')
  res.locals.initialLoad.push(toyResponse.rows);
  const foodResponse = await db.query('SELECT * FROM toys')
  res.locals.initialLoad.push(foodResponse.rows);
  const petResponse = await db.query('SELECT * FROM pet_type')
  res.locals.initialLoad.push(petResponse.rows);
  return next();
  } catch (error) {
    console.log(error);
    const err = {
      log: 'gameController.load',
      message: 'check log for error'
    }
    next(err);
  }
};


module.exports = gameController;