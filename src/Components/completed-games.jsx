import React from 'react';
// import './in-PlayStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'



const YourComponent = ({ date, time, team1, team1Img, team2, team2Img, winner, loss }) => {
  return (
    <>
    <Header />
    <div className="col-sm-12 col-md-6 col-lg-6 ">
     <a href="/match">
      <div className="hero_area__topslider-card swiper-slide p-4 p-md-6">
        <div className="hero_area__topslider-cardtop d-flex align-items-center justify-content-between mb-4 mb-md-6">
          <div className="d-flex align-items-center gap-2">
            <i className="ti ti-ball-football n5-color"></i>
            <span className="fs-seven n5-color cpoint">{date}</span>
          </div>
          <span className="fs-seven n5-color cpoint">{time}</span>
        </div>
        <div className="hero_area__topslider-cardbody d-flex align-items-center justify-content-between mb-4 mb-md-6">
          <div className="hero_area__topslider-flag">
            <div className="hero_area__topslider-flagbox mb-2">
              <img src={team1Img} alt="icon" />
            </div>
            <h6 className="cpoint">{team1}</h6>
          </div>
          <div className="hero_area__topslider-vs">
            <span className="fw-bold n5-color">VS</span>
          </div>
          <div className="hero_area__topslider-flag text-end d-flex flex-column justify-content-end align-items-end">
            <div className="hero_area__topslider-flagbox mb-2">
              <img src={team2Img} alt="icon" />
            </div>
            <h6 className="cpoint">{team2}</h6>
          </div>
        </div>
        <div className="hero_area__topslider-cardfooter d-flex align-items-center justify-content-between gap-4">
          <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
            <span className="fs-eight n5-color">Won By : </span>
            <span className="fw-bold fs-eight">{winner}</span>
          </div>
          <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
            <span className="fs-eight n5-color">Loss : </span>
            <span className="fw-bold fs-eight">{loss}</span>
          </div>
        </div>
      </div>
      </a>
    </div>
    </>
  );
};

const HeroSection = () => {
  const matches = [
    {
      date: "27-05-2024",
      time: "12:00",
      team1: "West Indies",
      team1Img: "./images/icon/chealse.png",
      team2: "South Africa",
      team2Img: "./images/icon/liverpool.png",
      winner: "Kolkata Knight Riders",
      loss: "1000"
    },
    {
      date: "27-05-2024",
      time: "12:00",
      team1: "West Indies",
      team1Img: "./images/icon/chealse.png",
      team2: "South Africa",
      team2Img: "./images/icon/liverpool.png",
      winner: "Kolkata Knight Riders",
      loss: "1000"
    },
    {
      date: "27-05-2024",
      time: "12:00",
      team1: "West Indies",
      team1Img: "./images/icon/chealse.png",
      team2: "South Africa",
      team2Img: "./images/icon/liverpool.png",
      winner: "Kolkata Knight Riders",
      loss: "1000"
    }
  ];

  return (
    <section className="hero_area__main gameMatch">
      <div className="container">
        <div className="row">
          {matches.map((match, index) => (
            <YourComponent key={index} {...match} />
          ))}
        </div>
        <div className="mt-4">
        <div className="d-flex justify-content-center">
          <a href="/index" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
