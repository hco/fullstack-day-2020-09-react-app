import React from "react";

export const ScoreBoard = () => {
  return (
    <div className="scoreboard">
      <div className="scoreboard__container">
        <div className="scoreboard__teams">
          <div className="scoreboard__team scoreboard__team--align-right mr-2">
            <div
              className="scoreboard__badge ml-1"
              style={{ background: "blue" }}
            />
            <div className="scoreboard__badge ml-1"></div>
            <span className="scoreboard__name">Team Blue</span>
          </div>
          <div className="scoreboard__result">
            <span className="scoreboard__result-home">3</span>
            <span className="scoreboard__result-separator">:</span>
            <span className="scoreboard__result-home">2</span>
          </div>
          <div className="scoreboard__team scoreboard__team--align-left ml-2">
            <div
              className="scoreboard__badge mr-1"
              style={{ background: "red" }}
            />
            <span className="scoreboard__name">Team Red</span>
          </div>
        </div>
      </div>
    </div>
  );
};
