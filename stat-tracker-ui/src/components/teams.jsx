import React, { useState, useEffect } from "react";
import teamData from "../teams.json";

const Teams = () => {
  //define states
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/players")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const spfl_teams = new Set(data.map((player) => player.Team));
    //     setTeams(spfl_teams);
    //   })
    //   .catch((err) => console.log("error: ", err));

    const spfl_teams = Object.keys(teamData.Teams);
    setTeams(spfl_teams);
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
        {teams.map((teamName) => (
          <div className="team-card" key={teamName}>
            <h1>{teamName}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Teams;
