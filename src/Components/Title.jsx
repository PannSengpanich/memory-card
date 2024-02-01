import styles from "../Styles/Title.module.scss";
import { signal } from "@preact/signals-react";

export default function Title() {
  const count = signal(0);
  function increment() {
    count.value = count.value + 1;
    console.log(count);
  }
  const number = count.value;
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>MEMORY CARD</h1>
      <button onClick={increment}>number:{number}</button>
    </div>
  );
}
