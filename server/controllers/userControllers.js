/* eslint-disable */
const bcrypt = require('bcryptjs');
const db = require('../models/dbModel');

const SALT_WORK_FACTOR = 10;

const userController = {};



userController.signup = async (req, res, next) => {
  // this req.body should contain the user's username and password
  try {
    const {username, password, leetcodeUsername} = req.body;
    const usernameCheckValue = [username];
    const usernameCheckQuery = 'SELECT * FROM users WHERE users.username = $1'
    const checkUsername = await db.query(usernameCheckQuery, usernameCheckValue);
    if (checkUsername.rows.length > 0) {
      res.locals.userIsTaken = true;
      return next();
    }
    const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR); // this autogenerates the salt and returns the hashed password in one function
    const values = [username, hashedPassword, leetcodeUsername, false, 0];
    const queryString = 'INSERT INTO users(username, password, leetcodeusername, isadmin, currency) VALUES($1, $2, $3, $4, $5) RETURNING *;';
    const data = await db.query(queryString, values);
    res.locals.currentUser = data.rows[0];
    console.log(res.locals.currentUser);
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
    console.log(user);
    const passwordIsInvalid = !await bcrypt.compare(password, user.rows[0].password);  // will return false if password matches
    if (!passwordIsInvalid) res.locals.currentUser = user.rows[0];
    res.locals.passwordIsInvalid = passwordIsInvalid;
    return next(); 
  } catch (err) {
    return next(err);
  }
};

userController.updateStats = async (req, res, next) => {
  console.log('updateStats function is running')
  const leetCodeQuery = 'SELECT * FROM users WHERE users.username = $1'
  const leetCodeData = await db.query(leetCodeQuery);
};


userController.admin = (req, res, next) => {
  res.locals.adminProfile = 'success';
  return next()
}


module.exports = userController;


/*
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.pre('save', function(next){
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err,hash){
      if (err) return next(err);
      user.password = hash;
      next();
    })
  })
});

userSchema.methods.comparePassword = function(userPassword, cb){
  bcrypt.compare(userPassword, this.password, function(err, match){
    if (err) return cb(err);
    cb(null, match);
  })
}
*/