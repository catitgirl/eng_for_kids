import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
          <FaHome className="icon-home" />
        </li>
        <li className="menu-item">
          <Link to="/game">Game</Link>
          <FaCat className="icon-cat" />
        </li>

        <li className="menu-item">
          <Link to="/table">Words</Link>
          <FaBook className="icon-cat" />
        </li>

        <li className="menu-item">
          <Link to="/lettercards">ABC</Link>
          <FaBaby className="icon-cat" />
        </li>
      </ul>

      <h1>English for babies</h1>
    </div>
  );
}

export default Header;
