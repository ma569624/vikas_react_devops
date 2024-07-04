import React, { useEffect, useState } from 'react';
import './in-PlayStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from './header'; // Import the Header component

const YourComponent = ({ date, time, team1, team1Img, team2, team2Img, loss, link }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <Link to={link} className="card text-decoration-none">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-ball-football n5-color"></i>
              <span className="fs-7 n5-color cpoint">{date}</span>
            </div>
            <span className="fs-7 n5-color cpoint">{time}</span>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="hero_area__topslider-flag">
              <img src={team1Img} className="team-img" alt="team1 icon" />
              <h6 className="cpoint">{team1}</h6>
            </div>
            <div className="hero_area__topslider-vs">
              <span className="fw-bold n5-color">VS</span>
            </div>
            <div className="hero_area__topslider-flag text-end">
              <img src={team2Img} className="team-img" alt="team2 icon" />
              <h6 className="cpoint">{team2}</h6>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="hero_area__topslider-cfitem d-flex align-items-center gap-2 py-2 justify-content-center w-100 p2-bg cpoint">
              <span className="fs-8 n5-color">Loss:</span>
              <span className="fw-bold fs-8">{loss}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const LeagueTable = ({ leagueData }) => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {leagueData.map((league, index) => (
          <div key={index} className="col">
            <Link to={`/1807030`}>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{league.league_year}</p>
                <p className="card-text">{league.league_name}</p>
                <h5 className="card-title">{league.league_key}</h5>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [matches, setMatches] = useState([]);
  const [leagueData, setLeagueData] = useState([]);

  // Simulating API fetch with useEffect
  useEffect(() => {
    // Replace with your actual API fetch logic
    const fetchMatchesAndLeagues = async () => {
      // Simulate fetching matches and league data
      const fetchedMatches = [
        // Replace with actual match data
      ];

      const fetchedLeagueData = [
        {
          league_year: "2023-24",
          league_name: "Afghanistan vs Ireland",
          league_key: 10658
        },
        {
           league_year: "2023-24",
          league_name: "India vs Australia",
          league_key: 10659,
         
        },
        {
          league_year: "2023-24",
          league_name: "England vs New Zealand",
          league_key: 10660
        },
        // Add more league data objects as needed
      ];

      setMatches(fetchedMatches);
      setLeagueData(fetchedLeagueData);
    };

    fetchMatchesAndLeagues();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <>
      <Header /> {/* Include the Header component */}
      <section className="hero_area__main match-sec">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {matches.map((match, index) => (
              <YourComponent key={index} {...match} />
            ))}
          </div>
          <LeagueTable leagueData={leagueData} />
          <div className="mt-4">
            <div className="d-flex justify-content-center">
              <a href="/index" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
