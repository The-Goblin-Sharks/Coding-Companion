/* eslint-disable */
import React, {useState} from 'react';

function Signup (props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [leetcodeUsername, setLeetcodeUsername] = useState('');

    function obtainInfo (e) {
        e.preventDefault();
        console.log('obtainInfo on submit function is running');
    }

  function formSwitchHandler (e) {
    props.setUserIsLoggingIn(true);
  }

    return (
          <form onSubmit={(e)=>obtainInfo(e)}> 
              <label>Create username: <input onChange = {(e)=>setUsername(e.target.value)} required></input></label>
              <label>Create password: <input onChange = {(e)=>setPassword(e.target.value)} required type="password" pattern="/^(? =.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/g"></input></label>
              <label>Leetcode username (case sensitive!): <input onChange = {(e)=>setLeetcodeUsername(e.target.value)} required></    input></label>
              <button type="submit">Submit</button>
              <p>Already have an account? Login <a onClick={formSwitchHandler}>here.</a></p>
          </form>
    )
}

export default Signup;