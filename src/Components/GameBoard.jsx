import styles from "../Styles/GameBoard.module.scss";
import GameCard from "./GameCard";
import { fetchImage } from "../services/api/fetchImage";
import { signal } from "@preact/signals-react";
import { useQuery } from "@tanstack/react-query";

function getImage() {
  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(fetchImage(i));
  }
  return array;
}

export default function GameBoard() {
  const { isPending, data } = useQuery({
    queryKey: ["image"],
    queryFn: () => {
      return Promise.all(getImage());
    },
  });

  if (isPending) return "loading...";

  const imageList = signal(data);

  console.log(imageList.value);
  return (
    <div className={styles.container}>
      {imageList.value.map((item) => (
        <GameCard
          imgSrc={item.sprites.front_default}
          name={item.name}
          key={item.id}></GameCard>
      ))}
    </div>
  );
}
