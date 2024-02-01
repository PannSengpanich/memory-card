import styles from "../Styles/GameCard.module.scss";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function GameCard({ imgSrc, name }) {
  // for (let i = 0; i++; i < 10) {}
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt="" />
      <h3>{name}</h3>
    </div>
  );
}
