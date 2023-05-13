import React from "react";
import "./Main.css";
import exampleImage from "../images/children2.jpg";

function Main() {
  return (
    <div className="main">
      <img className="example-image" src={exampleImage} alt="Example" />
      ...
    </div>
  );
}

export default Main;
