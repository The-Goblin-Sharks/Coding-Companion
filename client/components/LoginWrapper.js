/* eslint-disable */
import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup';
import '../styles/LoginWrapper.css';

function LoginWrapper (props) {
  const [userIsLoggingIn, setUserIsLoggingIn] = useState(true);
  return (
    <div className='loginWrapper'><button onClick={() => setUserIsLoggingIn(!userIsLoggingIn)}>Switch forms</button>{userIsLoggingIn ? <Login setUserInfo={props.setUserInfo} setUserIsLoggingIn={setUserIsLoggingIn}/> : <Signup setUserIsLoggingIn={setUserIsLoggingIn} />}</div>
  );
}

export default LoginWrapper;