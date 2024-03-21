import React, { useState, useEffect } from "react";

const Teams = () => {
  const Teams = [
    "Celtic",
    "Rangers",
    "Heart of Midlothian",
    "Hibernian",
    "Aberdeen",
    "Livingston",
    "St Johnstone",
    "Kilmarnock",
    "Dundee",
    "Motherwell",
    "Ross County",
    "St Mirren",
  ];

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((res) => res.json())
      .then((data) => {
        const spfl_teams = new Set(data.map((player) => player.Team));
        setTeams(spfl_teams);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  return (
    <>
      <div className="team-player-hero">
        <h1 className="team-player-hero-h1">
          Pick A <span className="word-highlight">Team</span>
        </h1>
        <h4>Analyse how the 12 competing teams compare...</h4>
      </div>
      <div id="teams-container">
        <div id="teams-outer-container">
          {Teams.map((team, index) => (
            <div className="team-card">
              <h1 key={index}>{team}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
