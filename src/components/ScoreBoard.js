import React, { useState, useEffect } from "react";
import styles from "../styles/scoreboard.module.css";
export default function ScoreBoard(props) {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (props.score > bestScore) {
      setBestScore(props.score);
    }
  }, [props.score]);

  return (
    <div className={styles.scoreBoard}>
      <div className={styles.yourScore}>Your Score: {props.score}</div>
      <div className={styles.bestScore}>Best Score: {bestScore}</div>
    </div>
  );
}
