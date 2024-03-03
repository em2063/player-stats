import React, { useState, useEffect } from "react";

const Players = () => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayer(data[0]);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="players-container">
        <p>{player.Player}</p>
      </div>
    </>
  );
};

export default Players;
