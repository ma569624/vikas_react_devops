// LoginForm.js

import React, { useState } from 'react';
import './loginStyle.css'; // Import CSS file

const LoginForm = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUername] = useState("")
  const [password, setPassword] = useState("")

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const togglePasswordVisibility = (e) => {

    if (username != "bro") {
      alert("username is incorrect")
      return;
    }

    if (password != "999") {
      alert("password is incorrect")
      return;
    }

    // navigate("/index");

    setShowPassword(!showPassword);
  };

  return (
    <section className={`container forms ${showSignup ? 'show-signup' : ''}`}>
      <div className="form login">
        <div className="form-content">
          <header />
          <form action="#">
            <div className="field input-field">
              <input type="userId" placeholder="UserId" className="input" onChange={(e) => setUername(e.target.value)} />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Password" className="password" onChange={(e) => setPassword(e.target.value)} />
              <i className='bx bx-hide eye-icon' onClick={togglePasswordVisibility}></i>
            </div>

            <div className="field button-field">
              <button onClick={() => togglePasswordVisibility()}>Login</button>
            </div>
          </form>
        </div>
      </div>

   
     
    </section>
  );
};

export default LoginForm;

