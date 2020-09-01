import React from "react";
import { ScoreButtons } from "./component/ScoreButtons";
import { ScoreBoard } from "./component/ScoreBoard";

function App() {
  return (
    <div>
      <ScoreButtons></ScoreButtons>
      <ScoreBoard />
    </div>
  );
}

export default App;
