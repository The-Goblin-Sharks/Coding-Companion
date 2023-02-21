/* eslint-disable */
import React, {useState} from 'react';
import '../styles/Login.css';
import '../styles/Signup.css'

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  const submitFormHandler = async(e) => {
    e.preventDefault();
    const data = await fetch(`/user/login/${username}&${password}`);
    const userData = await data.json();
    if (userData.err) {
      setPasswordIsInvalid(true);
      return;
    }
    props.setUserInfo(userData);
  }

  const formSwitchHandler = e => {
    props.setUserIsLoggingIn(false);
  }

  return <form className='loginForm' onSubmit={submitFormHandler}>
    <label>Username: <input type='text' id='username' name='username' onChange={(e) => setUsername(e.target.value)} required className="signup-input"></input></label>
    <label>Password: <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)} required className="signup-input"></input></label>
    <button type='submit' className="signup-button">Login</button>
    {passwordIsInvalid && <p style={{color: 'red'}}>Username or password is incorrect</p>}
    <p>Don't have an account? Create an account <a onClick={formSwitchHandler}>here.</a></p>
  </form>
}

export default Login;
