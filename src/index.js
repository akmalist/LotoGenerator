import React from "react";
import ReactDOM from "react-dom";
import Lottery from "./Lottery";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Loto" maxBalls={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
