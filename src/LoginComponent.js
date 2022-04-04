import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

export default function LoginComponent() {


  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let navigation = useNavigate();


  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function login(event) {
    event.preventDefault();
    const user = {
      email,
      password
    }
    axios.post('/api/1.0/users/login', user).then((response) => {
      alert(response.data.message);
      navigation('../dashboard');

    }).catch(error => {
      alert(error.message)
    })
  }

  return (
    <div className='loginBG'>
      <h1 className="heading">Login here</h1>
      <div>
        <form className="form-container" onSubmit={login}>
          <fieldset className='login-legend'>
            <legend>Login</legend>
            <label>Email</label>
            <input value={email} placeholder='Your Email' type="email" onChange={changeEmail}  required/>
            <label>Password</label>
            <input value={password} placeholder='Your Password' type="password" onChange={changePassword} required />
            <button className='loginbutton'>Login</button>
            <Link to="/createAccount">Create Account</Link>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
