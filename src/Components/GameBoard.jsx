import styles from "../Styles/GameBoard.module.scss";
import Card from "./Card";

export default function GameBoard() {
  return (
    <div className={styles.container}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}
