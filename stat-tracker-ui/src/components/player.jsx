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
  const [visiblePlayers, setVisiblePlayers] = useState(10);

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  if (!players) {
    return (
      <div id="players-container">
        <div className="loader"></div>
      </div>
    );
  }

  const loadMore = (event) => {
    event.preventDefault();
    setVisiblePlayers((prevcount) => prevcount + 10);
  };

  const renderedPlayers = players.slice(0, visiblePlayers);

  return (
    <>
      <div className="players-page-container">
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
            {renderedPlayers.map((player) => (
              <PlayerRow key={player.id} player={player} />
            ))}
          </table>
          {visiblePlayers < players.length && (
            <div id="load-more" onClick={(event) => loadMore(event)}>
              Load More
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Players;
