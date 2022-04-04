import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";

export default function SignupComponent() {

  function formUI() {

    let [name, setName] = React.useState("");
    let [email, setEmail] = React.useState("");
    let [password, setPassword] = React.useState("");
    let navigation = useNavigate();

    function changeEmail(event) {
      setEmail(event.target.value);
    }
  
    function changePassword(event) {
      setPassword(event.target.value);
    }
    
    function changeName(event) {
      setName(event.target.value);
    }
  
    function signup(event) {
      event.preventDefault();
      const user = {
        name,
        email,
        password
      }
      axios.post('/api/1.0/users/signup', user).then((response) => {
        alert(response.data.message);
        navigation('../login');

      }).catch(error => {
        alert(error.message)
      })
    }

    return (
      <div className='signupBG'>
        <h1 className="heading">Signup here</h1>
        <div>
          <form className="form-container">
          <fieldset className='signup-legend'>
            <legend>Signup</legend>
            <label>Name</label>
            <input value={name} onChange={changeName} placeholder='Your Name' type="text" />
            <label>Email</label>
            <input value={email} onChange={changeEmail} placeholder='Your Email' type="email" />
            <label>Password</label>
            <input value={password} onChange={changePassword} placeholder='Your Password' type="password" />
            <button className='signup-button' onClick={signup}>Signup</button>
            <Link to="/">Already an Account ?</Link>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      {formUI()}
    </div>
  )

}
