import React, { useState, useEffect } from "react";

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

const Players = () => {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  if (!players) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
        {players.map((player) => (
          <PlayerRow key={player.id} player={player} />
        ))}
      </table>
    </>
  );
};

export default Players;
