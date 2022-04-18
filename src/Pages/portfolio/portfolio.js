import React from "react";
import "./portfolio.css";
// import img6 from "../../Assets/images/github.png";
// import img7 from "../../Assets/images/undercontruction.png";
// import { Link } from "react-router-dom";

export default function portfolio() {
  return (
    <div className="portfolio">
      <ul>
        <li className="portfolio__card">
          <a
            alt="link to felipe's github"
            href="https://github.com/Felipevillajr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>My Github</h1>
            <h3>Repo of my latest work</h3>
          </a>
        </li>
        <li>
          <a
            alt="link to LFG forums"
            href="https://pacific-retreat-51764.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>BrainStation Final Project</h1>
            <h3>a forum style site using Node and Mysql</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}
