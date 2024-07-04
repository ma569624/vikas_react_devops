import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './in-PlayStyle.css';
import './homeStyle.css';

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const [username, setUername] = useState("")
  const [password, setPassword] = useState("")


  const togglePasswordVisibility = (e) => {

    if (username != "bro") {
      alert("username is incorrect")
      return;
    }

    if (password != "999") {
      alert("password is incorrect")
      return;
    }

    navigate("/index");

  };

  return (
    <section className="hero_area__main form_sec formm-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={togglePasswordVisibility} className="p-4 p-md-6 border rounded-3">
              <div className="logo logos justify-content-center">
                <img src="./image/logo.png" alt="Logo" />
              </div>
              <h2 className="mb-4 text-center">Login</h2>
              <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input type="text" id="userId" name="userId" className="form-control" onChange={(e) => setUername(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="d-grid bt-bg">
                <button type="submit" className="btn btn-secondary btn-lg w-100">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
