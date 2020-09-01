import React from "react";
import { ScoreButtons } from "./component/ScoreButtons";
import { ScoreBoard } from "./component/ScoreBoard";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <ScoreButtons></ScoreButtons>
        <ScoreBoard />
      </div>
    </Provider>
  );
}

export default App;
