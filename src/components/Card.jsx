import React from "react";
import "./Card.css";

const Card = ({ word, translation, image, isPrev }) => {
  const classNames = `card ${isPrev ? "prev" : ""}`;
  return (
    <div className={classNames}>
      <h3>{word}</h3>
      <img src={image} alt={word} />
      <p>{translation}</p>
    </div>
  );
};

export default Card;
