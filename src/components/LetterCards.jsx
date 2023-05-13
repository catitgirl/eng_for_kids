import React, { useState, useEffect } from "react";
import "./LetterCards.css";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const LetterCard = ({ letter }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `images/${letter}.png`;
    img.onload = () => setImageLoaded(true);
  }, [letter]);

  const handleCardClick = () => {
    setIsFlipped(true);
  };

  return (
    <div className="letter-card" onClick={handleCardClick}>
      <img
        className="letter-image"
        src={imageLoaded ? `images/${letter}.png` : "images/back.jpg"}
        alt={isFlipped ? letter : "back"}
      />
    </div>
  );
};

const LetterCards = () => {
  return (
    <div className="letter-cards">
      {letters.map((letter) => (
        <LetterCard key={letter} letter={letter} />
      ))}
    </div>
  );
};

export default LetterCards;
