import React, { useState } from "react";
import "./LetterCards.css";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const LetterCard = ({ letter }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="letter-card" onClick={handleCardClick}>
      <div className={`card-front ${isFlipped ? "hidden" : ""}`}>
        <img
          className="letter-image"
          src={process.env.PUBLIC_URL + "/images/back.jpg"}
          alt="back"
        />
      </div>
      <div className={`card-back ${isFlipped ? "" : "hidden"}`}>
        <img
          className={`letter-image ${imageLoaded ? "" : "hidden"}`}
          src={process.env.PUBLIC_URL + `/images/${letter}.png`}
          alt={letter}
          onLoad={handleImageLoad}
        />
      </div>
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
