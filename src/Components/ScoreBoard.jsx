import styles from "../Styles/ScoreBoard.module.scss";

export default function ScoreBoard() {
  return (
    <>
      <div className={styles.container}>
        <div>Current Score:</div>
        <div>Best Score:</div>
      </div>
    </>
  );
}
