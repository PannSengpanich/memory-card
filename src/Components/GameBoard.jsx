import styles from "../Styles/GameBoard.module.scss";
import GameCard from "./GameCard";
import { fetchImage } from "../services/api/fetchImage";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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

export default function GameBoard({ sendScore }) {
  const [imageList, setImageList] = useState(null);
  const [selectedList, setSelectedList] = useState([]);

  const { isPending, data } = useQuery({
    queryKey: ["image"],
    queryFn: async () => {
      const imagesData = await Promise.all(getImage());
      setImageList(imagesData);
      console.log("set initial image list successful");
      return shuffle(imagesData);
    },
  });

  function handleSelect(item) {
    setSelectedList([...selectedList, item.id]);
    setImageList(shuffle(imageList));
  }

  function hasDuplicateObjects(array) {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (isEqual(array[i], array[j])) {
          return true; // Duplicate found
        }
      }
    }
    return false; // No duplicates found
  }

  // A simple equality check for objects
  function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  useEffect(() => {
    if (hasDuplicateObjects(selectedList)) {
      console.log("true");
      setSelectedList([]);
    } else {
      console.log("false");
      sendScore(selectedList.length);
    }
  }, [selectedList]);
  console.log(imageList);
  console.log(selectedList);
  if (isPending) return "loading...";
  return (
    <div className={styles.container}>
      {imageList.map((item) => (
        <GameCard
          imgSrc={item.sprites.front_default}
          name={item.name}
          key={item.id}
          select={() => handleSelect(item)}
        ></GameCard>
      ))}
    </div>
  );
}
