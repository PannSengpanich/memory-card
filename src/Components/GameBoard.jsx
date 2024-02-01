import styles from "../Styles/GameBoard.module.scss";
import GameCard from "./GameCard";
import { fetchImage } from "../services/api/fetchImage";
import { signal } from "@preact/signals";
import { useQuery } from "@tanstack/react-query";

function getImage() {
  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(fetchImage(i));
  }
  return array;
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function GameBoard() {
  const { isPending, data } = useQuery({
    queryKey: ["image"],
    queryFn: async () => {
      const imagesData = await Promise.all(getImage());
      return shuffle(imagesData);
    },
  });

  const imageList = signal(data);
  const selectedList = signal([]);
  const counter = signal(0);
  console.log(imageList);

  function handleSelect(item) {
    selectedList.value.push(item.id);
    imageList.value = shuffle(imageList.value);
    counter.value++;

    console.log(imageList);
    console.log(imageList.value);
    console.log(selectedList.value);
    console.log(counter.value);
  }

  if (isPending) return "loading...";
  return (
    <div className={styles.container}>
      {imageList.value.map((item) => (
        <GameCard
          imgSrc={item.sprites.front_default}
          name={item.name}
          key={item.id}
          select={() => handleSelect(item)}
        ></GameCard>
      ))}
      <div>{counter.value}</div>
      <button
        onClick={() => {
          counter.value = counter.value + 1;
          console.log(counter.value);
        }}
      ></button>
    </div>
  );
}
