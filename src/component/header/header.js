import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function header() {
  return (
    <section className="header">
      <div className="header_titles">
        <h1 className="header_titles_title">Felipe Villa</h1>
        <h3 className="header_titles_subtitle">Web Developer | Front End</h3>
      </div>
      <div className="header_links">
        <a className="header_links_link" href="#contactme">
          ContactMe
        </a>
        <a className="header_links_link2" href="#aboutme">
          AboutMe
        </a>
        <Link className="header_links_link2" to="/portfolio">
          Projects
        </Link>
      </div>
    </section>
  );
}
