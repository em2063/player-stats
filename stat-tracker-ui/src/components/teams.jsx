import React, { useState, useEffect } from "react";
import teamData from "../teams.json";

let PlayerRow = ({ player }) => {
  return (
    <tr>
      <td>{player.Player}</td>
      <td>{player.Nation.slice(3)}</td>
      <td>{player.Pos}</td>
      <td>{player.Age.substr(0, 2)}</td>
      <td>{player.MP}</td>
      <td>{player.Min}</td>
      <td>{player.Gls}</td>
      <td>{player.Ast}</td>
      <td>{player.PK}</td>
      <td>{player.PKatt}</td>
      <td>{player.CrdY}</td>
      <td>{player.CrdR}</td>
      <td>{player.Team}</td>
    </tr>
  );
};

const Teams = () => {
  //define states
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((err) => console.log("error: ", err));
    const spfl_teams = Object.keys(teamData.Teams);
    setTeams(spfl_teams);
  }, []);

  if (!players) {
    return (
      <div id="players-container">
        <div className="loader"></div>
      </div>
    );
  }

  const showPlayers = (teamName) => {
    return (
      <>
        <div id="players-container">
          <table className="player-table">
            <tr className="table-header">
              <td>Player</td>
              <td>Nation</td>
              <td>Position</td>
              <td>Age</td>
              <td>Matches Played</td>
              <td>Minutes</td>
              <td>Goals</td>
              <td>Assists</td>
              <td>Penalty Goals</td>
              <td>Penalties Attempted</td>
              <td>Yellow</td>
              <td>Red</td>
              <td>Team</td>
            </tr>
            {players.map((player) => {
              if (player.Team === teamName) {
                return <PlayerRow key={player.id} player={player} />;
              }
              return null;
            })}
          </table>
        </div>
      </>
    );
  };

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
                <td id="teams-td" onClick={() => showPlayers(teamName)}>
                  {teamName}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Teams;
