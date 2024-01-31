import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import GameBoard from "./Components/GameBoard";
import ScoreBoard from "./Components/ScoreBoard";
import Title from "./Components/Title";

function App() {
  return (
    <>
      <Title></Title>
      <ScoreBoard></ScoreBoard>
      <GameBoard></GameBoard>
    </>
  );
}

export default App;
