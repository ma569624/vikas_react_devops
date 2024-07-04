import React from 'react';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="sticky-header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/index"><img src="/image/logo.png" alt="logo" /></Link>
          </div>
          <nav className="menu">
            <div className="logout">
              <button>Logout</button>
            </div>
          </nav>
        </div>
      </header>

      <section className="profile-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="profile-name">
                <div className="name-tx"><span>Vikash</span></div>
                <div className="name-tx"><span><b>Chips:</b> 500</span></div>
                <div className="name-tx"><span><b>Expor:</b> 100</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
