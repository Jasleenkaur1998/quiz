import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

export default function LoginComponent() {


  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function login() {
    alert('submitted');
  }

  return (
    <div className='loginBG'>
      <h1 className="heading">Login here</h1>
      <div>
        <form className="form-container">
          <fieldset className='login-legend'>
            <legend>Login</legend>
            <label>Email</label>
            <input value={email} placeholder='Your Email' type="email" onChange={changeEmail}  required/>
            <label>Password</label>
            <input value={password} placeholder='Your Password' type="password" onChange={changePassword} required />
            <button className='loginbutton' onClick={login}>Login</button>
            <Link to="/createAccount">Create Account</Link>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
