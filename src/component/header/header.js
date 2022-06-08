import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import logo from "../../Assets/images/felipeweblogo2single.png";

export default function header() {
  return (
    <div>
      <section className="header">
        {/* <img className="header_logo" src={logo}></img> */}
        <div className="header_titles">
          <Link to="/">
            <h1 className="header_titles_title">Felipe Villa</h1>
          </Link>
          <h3 className="header_titles_subtitle">Web Developer | Front End</h3>
        </div>
        <div className="header_links">
          {/* <a className="header_links_link" href="#contactme">
            ContactMe
          </a> */}
          <Link className="header_links_link2" to="/aboutme">
            AboutMe
          </Link>
          <Link className="header_links_link" to="/portfolio">
            Projects
          </Link>
        </div>
      </section>
      {/* <div className="bg"> </div> */}
    </div>
  );
}
