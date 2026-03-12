import React from "react";
import "./contactme.css";
import { PageMeta } from "../../components/PageMeta/PageMeta";

export default function contactme() {
  return (
    <div className="aboutPage">
      <PageMeta
        title="About"
        description="About Felipe Villa — web developer. React, Node, and modern front-end. Building clean UIs and learning new tech."
        path="/aboutme"
      />
      <div className="container">
        <header className="aboutPage__header">
          <h1 className="aboutPage__title">About</h1>
          <p className="aboutPage__subtitle">
            A little story about how I got into building for the web.
          </p>
        </header>

        <div className="aboutCard">
          <p className="aboutCard__p">
            I’m Felipe Villa—newer to the tech scene and actively building
            projects to grow my skills. I enjoy web design, learning new
            technologies, and turning ideas into clean, usable interfaces.
          </p>
          <p className="aboutCard__p">
            Recently I’ve been exploring Three.js and modern front-end tooling.
            I trained with React and have experience using Node as a foundation
            for web development.
          </p>
          <div className="aboutCard__actions">
            <a
              className="btn btnSecondary"
              href="https://github.com/Felipevillajr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my GitHub <span className="srOnly">(opens in new tab)</span>
            </a>
            <a
              className="btn btnPrimary"
              href="mailto:felipevilla.webdev@gmail.com?subject=Hello%20Felipe"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
