import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <footer className="siteFooter">
      <div className="container siteFooter__inner">
        <div className="siteFooter__left">
          <div className="siteFooter__brand">Felipe Villa</div>
          <div className="siteFooter__muted">
            Built with React • {new Date().getFullYear()}
          </div>
        </div>

        <div className="siteFooter__right" aria-label="Footer links">
          <a
            className="siteFooter__link"
            href="mailto:felipevilla.webdev@gmail.com?subject=Hello%20Felipe"
          >
            Email
          </a>
          <a
            className="siteFooter__link"
            href="https://github.com/Felipevillajr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span className="srOnly">(opens in new tab)</span>
          </a>
          <a className="siteFooter__link" href="#main">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
