/* eslint-disable */
import React, {useState} from 'react';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitFormHandler =async (e) => {
    e.preventDefault();
    const data = await fetch(`/user/login/${username}&${password}`);
    const userData = await data.json();
    console.log(userData);
  }

  const formSwitchHandler = e => {
    props.setUserIsLoggingIn(false);
  }

  return <form onSubmit={submitFormHandler}>
    <label>Username: <input type='text' id='username' name='username' onChange={(e) => setUsername(e.target.value)} required></input></label>
    <label>Password: <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)} required></input></label>
    <button type='submit'>Login</button>
    <p>Don't have an account? Create an account <a onClick={formSwitchHandler}>here.</a></p>
  </form>
}

export default Login;
