import React, { useState } from "react";
import styles from "../styles/card.module.css";
export default function Card(props) {
  function handleClick() {
    props.onClick();
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={props.logo} />
    </div>
  );
}
