import styles from "../Styles/GameBoard.module.scss";
import Card from "./Card";
import { fetchImage } from "../services/api/fetchImage";
import { signal } from "@preact/signals-react";

export default function GameBoard() {
  // const image = signal(await fetchImage(1));

  // console.log(image.value);

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
