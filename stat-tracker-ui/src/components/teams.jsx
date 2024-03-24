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
        <table id="teams-table">
          {teams.map((teamName) => (
            <tbody id="teams-tbody">
              <tr key={{ teamName }} id="teams-tr">
                <td id="teams-td">{teamName}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Teams;
