import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GameBoard from "./Components/GameBoard";
import ScoreBoard from "./Components/ScoreBoard";
import Title from "./Components/Title";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [score, setScore] = useState(0);

  function receiveScore(data) {
    setScore(data);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Title></Title>
      <ScoreBoard score={score}></ScoreBoard>
      <GameBoard sendScore={receiveScore}></GameBoard>
    </QueryClientProvider>
  );
}

export default App;
