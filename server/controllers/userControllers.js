/* eslint-disable */
const bcrypt = require('bcryptjs');
const db = require('../models/dbModel');

const SALT_WORK_FACTOR = 10;

const userController = {};



userController.signup = async (req, res, next) => {
  // this req.body should contain the user's username and password
  try {
    const {username, password, leetcodeUsername} = req.body;
    // checks for valid leetcode username
    const leetcodeUsernameCheck = await fetch(`https://leetcode.com/${leetcodeUsername}`);
    if (leetcodeUsernameCheck.status === 404) return next({log: 'Leetcode username is invalid', message : {err: 'Leetcode username is invalid. Please sign up with valid Leetcode username.'}});
    // checks for if username is already taken
    const usernameCheckValue = [username];
    const usernameCheckQuery = 'SELECT * FROM users WHERE users.username = $1;'
    const checkUsername = await db.query(usernameCheckQuery, usernameCheckValue);
    if (checkUsername.rows.length > 0) {
      return next({log: 'Username is taken', message : {err: 'Username is taken. Please try signing up with a different username.'}});
    }
    // hashes password and inserts new user into database
    const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR); // this autogenerates the salt and returns the hashed password in one function
    const values = [username, hashedPassword, leetcodeUsername, false, 0, 0, 0, 0];
    const queryString = 'INSERT INTO users(username, password, leetcodeusername, isadmin, currency, easycount, medcount, hardcount) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;';
    const data = await db.query(queryString, values);
    res.locals.currentUser = data.rows[0];
    return next();
  } catch (err) {
    return next(err);
  }  
};


userController.login = async (req, res, next) => {
  try {
    const {username, password} = req.params;
    const usernameCheckValue = [username];
    const usernameCheckQuery = 'SELECT * FROM users WHERE users.username = $1;';
    const user = await db.query(usernameCheckQuery, usernameCheckValue);
    const passwordIsValid = await bcrypt.compare(password, user.rows[0].password);  // will return false if password matches
    if (!passwordIsValid || user.rows.length === 0) return next({log: 'Username or password is invalid', message : {err: 'Username or password is invalid. Please login with a valid username and password.'}})
    res.locals.currentUser = user.rows[0];
    return next(); 
  } catch (err) {
    return next(err);
  }
};

// this middleware gets the difference in problems solved between last session and current session
userController.updateStats = async (req, res, next) => {
  try {
    const problemDiff = {
      easy: res.locals.currentStats[1].count - res.locals.currentUser.easycount, 
      medium: res.locals.currentStats[2].count - res.locals.currentUser.medcount,
      hard: res.locals.currentStats[3].count - res.locals.currentUser.hardcount
    };
    res.locals.problemDiff = problemDiff;
    const values = [problemDiff.easy + res.locals.currentUser.easycount, problemDiff.medium + res.locals.currentUser.medcount, problemDiff.hard + res.locals.currentUser.hardcount, res.locals.currentUser.username];
    const queryString = 'UPDATE users SET easycount = $1, medcount = $2, hardcount = $3 WHERE username = $4 RETURNING *;';
    const data = await db.query(queryString, values);
    res.locals.currentUser = data.rows[0];
    return next();
  } catch (err) {
    return next(err);
  }
};

// this middleware calculates currency gained based on the problems solved since last session
userController.gainCurrency = async (req, res, next) => {
  try {
    let gainedCurrency = 0;
    const converter = {
      easy: 1,
      medium: 3,
      hard: 10,
    }
    for (const key in res.locals.problemDiff) {
      gainedCurrency += converter[key] * res.locals.problemDiff[key]; // converter amount multiplied by new problems solved
    }
    const values = [gainedCurrency + res.locals.currentUser.currency, res.locals.currentUser.username];
    const queryString = 'UPDATE users SET currency = $1 WHERE username = $2 RETURNING *;'
    const data = await db.query(queryString, values);
    res.locals.currentUser = data.rows[0];
    res.locals.gainedCurrency = gainedCurrency;
    return next();
  } catch(err) {
    return next(err);
  }
}

// create a function that registers an admin user
// userController.admin = (req, res, next) => {
//   res.locals.adminProfile = 'success';
//   return next()
// }


module.exports = userController;

