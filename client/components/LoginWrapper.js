/* eslint-disable */
import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup';
import '../styles/LoginWrapper.css';

function LoginWrapper (props) {
  const [userIsLoggingIn, setUserIsLoggingIn] = useState(true);
  return (
    <div className='loginWrapper'>{userIsLoggingIn ? <Login setUserInfo={props.setUserInfo} setUserIsLoggingIn={setUserIsLoggingIn} setLoggedIn={props.setLoggedIn}/> : <Signup setLoggedIn={props.setLoggedIn} setUserIsLoggingIn={setUserIsLoggingIn} setUserInfo={props.setUserInfo} />}</div>
  );
}

export default LoginWrapper;