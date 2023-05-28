import React, { useEffect, useState } from "react";
import styles from "./styles/app.module.css";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import Table from "./components/Table";
function App() {
  const [score, setScore] = useState(0);
  const updateScore = (newScore) => {
    setScore(newScore);
  };
  useEffect(() => {}, [score]);
  return (
    <div className={styles.body}>
      <Header></Header>
      <ScoreBoard score={score}></ScoreBoard>
      <Table updateScore={updateScore}></Table>
    </div>
  );
}

export default App;
