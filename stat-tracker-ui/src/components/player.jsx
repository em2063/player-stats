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
  const [visiblePlayers, setVisiblePlayers] = useState(20);
  const [search, setSearch] = useState("");

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

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.Player.toLowerCase().includes(search.toLowerCase())
  );

  const renderedPlayers = filteredPlayers.slice(0, visiblePlayers);

  return (
    <>
      <div className="team-player-hero">
        <h1 className="team-player-hero-h1">
          Find your <span className="word-highlight">favourite</span> player
        </h1>
        <h3>Search through 200+ players!</h3>
      </div>
      <div id="player-form-container">
        <div id="player-form">
          <input
            type="text"
            id="player-input"
            placeholder="Search for a player!"
            value={search}
            onChange={searchChange}
          />
        </div>
      </div>
      <div id="players-page-container">
        {filteredPlayers.length === 0 && (
          <div id="player-not-found-container">
            <h1>Player not found</h1>
            <h4>Try searching again!</h4>
          </div>
        )}

        {filteredPlayers.length > 0 && (
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
        )}
      </div>
    </>
  );
};

export default Players;
