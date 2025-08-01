import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>Ashley Lin</h1>
      <div className="playerStats__lines">
        <span className="playerStats__lines playerStats__lines--thick"></span>
        <span className="playerStats__lines playerStats__lines--thin"></span>
      </div>
      <h2>Frontend Developer</h2>
    </div>
  );
};

export default PlayerStats;
