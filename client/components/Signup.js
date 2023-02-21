/* eslint-disable */
import React, {useState} from 'react';
import '../styles/Signup.css'

function Signup (props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [leetcodeUsername, setLeetcodeUsername] = useState('');

    function obtainInfo (e) {
        e.preventDefault();
        console.log('obtainInfo on submit function is running');
        fetch('/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, password, leetcodeUsername})
        })
    }

  function formSwitchHandler (e) {
    props.setUserIsLoggingIn(true);
  }

    return (
          <form onSubmit={(e)=>obtainInfo(e)} className="signup-form"> 
              <label>Create username: <input onChange = {(e)=>setUsername(e.target.value)} required className="signup-input"></input></label>
              <label>Create password: <input onChange = {(e)=>setPassword(e.target.value)} required type="password" pattern="/^(? =.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/g" className="signup-input"></input></label>
              <label>Leetcode username (case sensitive!): <input onChange = {(e)=>setLeetcodeUsername(e.target.value)} required className="signup-input"></    input></label>
              <button type="submit" className="signup-button">Submit</button>
              <p>Already have an account? Login <a onClick={formSwitchHandler}>here.</a></p>
          </form>
    )
}

export default Signup;