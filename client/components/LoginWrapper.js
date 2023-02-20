/* eslint-disable */
import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup';

function LoginWrapper (props) {
  const [userIsLoggingIn, setUserIsLoggingIn] = useState(true);
  return (
    <div><button onClick={() => setUserIsLoggingIn(!userIsLoggingIn)}>Switch forms</button>{userIsLoggingIn ? <Login setUserIsLoggingIn={setUserIsLoggingIn}/> : <Signup setUserIsLoggingIn={setUserIsLoggingIn} />}</div>
  );
}

export default LoginWrapper;