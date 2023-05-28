import React, { useState, useEffect } from "react";
import styles from "../styles/table.module.css";
import Card from "./Card";

export default function Table(props) {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  let logos = [
    "https://www.carlogos.org/car-logos/audi-logo-2016.png",
    "https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100.png",
    "https://www.carlogos.org/logo/Jaguar-logo-2012-1920x1080.png",
    "https://www.carlogos.org/logo/Bugatti-logo-1024x768.png",
    "https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png",
    "https://www.carlogos.org/car-logos/porsche-logo-2100x1100.png",
    "https://www.carlogos.org/car-logos/maserati-logo-2020.png",
    "https://www.carlogos.org/car-logos/toyota-logo-2019-3700x1200.png",
  ];

  function handleCardClick(logo) {
    if (clickedCards.includes(logo)) {
      setScore(0);
      setClickedCards([]);
      alert("You lose");
    } else {
      setClickedCards((prevClickedCards) => [...prevClickedCards, logo]);
      setScore((prevScore) => prevScore + 1);
    }
  }

  useEffect(() => {
    if (score == 8) {
      setClickedCards([]);
      alert("You win");
      setScore(0);
    }
    props.updateScore(score);
    console.log(score);
  }, [score]);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledLogos = shuffleArray(logos);

  return (
    <div className={styles.table}>
      {shuffledLogos.map((logo, index) => (
        <Card
          key={index}
          logo={logo}
          onClick={() => handleCardClick(logo)} // Pass index and logo to handleCardClick
        />
      ))}
      <div></div>
    </div>
  );
}
