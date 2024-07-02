// LoginForm.js

import React, { useState } from 'react';
import './loginStyle.css'; // Import CSS file

const LoginForm = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const togglePasswordVisibility = (e) => {
    const pwFields = e.currentTarget.parentElement.parentElement.querySelectorAll('.password');

    pwFields.forEach((password) => {
      if (password.type === 'password') {
        password.type = 'text';
      } else {
        password.type = 'password';
      }
    });

    setShowPassword(!showPassword);
  };

  return (
    <section className={`container forms ${showSignup ? 'show-signup' : ''}`}>
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form action="#">
            <div className="field input-field">
              <input type="userId" placeholder="UserId" className="input" />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Password" className="password" />
              <i className='bx bx-hide eye-icon' onClick={togglePasswordVisibility}></i>
            </div>

        

            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>

   
     
    </section>
  );
};

export default LoginForm;

