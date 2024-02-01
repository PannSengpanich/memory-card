import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GameBoard from "./Components/GameBoard";
import ScoreBoard from "./Components/ScoreBoard";
import Title from "./Components/Title";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Title></Title>
      <ScoreBoard></ScoreBoard>
      <GameBoard></GameBoard>
    </QueryClientProvider>
  );
}

export default App;
