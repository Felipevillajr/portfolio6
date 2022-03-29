import React from "react";
import "./portfolio.css";
import img6 from "../../Assets/images/github.png";
import img7 from "../../Assets/images/undercontruction.png";
import { Link } from "react-router-dom";

export default function portfolio() {
  return (
    <div className="portfolio">
      <img alt="undercontruction image" src={img7} />
      <br></br>
      Under Construction ref to my github
      <a
        alt="link to felipe's github"
        href="https://github.com/Felipevillajr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="img6" alt="github icon" src={img6} />
      </a>
      <Link to="/">
        <button>go back</button>
      </Link>
    </div>
  );
}
