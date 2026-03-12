import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import logo from "../../Assets/images/felipeweblogo2single.png";

export default function header({ theme, onToggleTheme }) {
  return (
    <header className="siteHeader">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <div className="container siteHeader__inner">
        <div className="siteHeader__brand">
          <Link className="siteHeader__brandLink" to="/">
            <span className="siteHeader__title">Felipe Villa</span>
          </Link>
          <span className="siteHeader__subtitle">Web Developer • Front End</span>
        </div>

        <nav className="siteHeader__nav" aria-label="Primary">
          <Link className="siteHeader__navLink" to="/portfolio">
            Projects
          </Link>
          <Link className="siteHeader__navLink" to="/aboutme">
            About
          </Link>
          <button
            type="button"
            className="themeToggle"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <span className="themeToggle__icon" aria-hidden="true">
              {theme === "dark" ? "☀" : "☾"}
            </span>
            <span className="themeToggle__text">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
