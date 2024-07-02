import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeStyle.css';

function Home() {
    return (
        <div>
            {/* Required meta tags and Bootstrap CSS are usually included in the public/index.html file */}
     

      <section className="desbord">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/in-Play">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>In Play</p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/cricet.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/profile">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>Profile</p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/profile.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/statement">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>Statement</p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/statement.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/completed-games">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>Completed Games</p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/complete-games.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/my-ledger">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>My ledger</p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/ledger.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/games">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>Games</p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/casino.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/rules">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>Rules</p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/rules.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/change-password">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>Change Password</p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/password.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <a href="/manual-games">
                <div className="sec_desbord_card">
                  <div className="sec_desbord_tx">
                    <p>Manual Games </p>
                  </div>
                  <div className="sec_desbord_img">
                    <img src="./image/manualgames.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Home;
