import styles from "../Styles/ScoreBoard.module.scss";
import { useEffect, useState } from "react";

export default function ScoreBoard({ score }) {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score >= bestScore) {
      setBestScore(score);
    } else return;
  }, [score]);
  return (
    <>
      <div className={styles.container}>
        <div>Current Score:{score}</div>
        <div>Best Score: {bestScore}</div>
      </div>
    </>
  );
}
