import React from 'react';

// Sample data
const leagueData = [
  {
    "league_key": 10658,
    "league_name": "Afghanistan vs Ireland",
    "league_year": "2023-24"
  },
  // You can add more objects here if needed
];

const MapLoop = () => {
  // Use the map function to loop through the data and create JSX elements
  const leagueInfo = leagueData.map((league, index) => (
    <div key={index}>
      <p>League Key: {league.league_key}</p>
      <p>League Name: {league.league_name}</p>
      <p>League Year: {league.league_year}</p>
    </div>
  ));

  return (
    <div>
      {leagueInfo}
    </div>
  );
};

export default MapLoop;
