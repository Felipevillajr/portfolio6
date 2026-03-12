import React from "react";
import "./ProjectCard.css";

export function ProjectCard({ title, description, href, tags = [] }) {
  return (
    <article className="projectCard">
      <div className="projectCard__top">
        <h2 className="projectCard__title">{title}</h2>
        <p className="projectCard__desc">{description}</p>
      </div>

      {tags.length > 0 ? (
        <ul className="projectCard__tags" aria-label="Tech tags">
          {tags.map((t) => (
            <li key={t} className="projectCard__tag">
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="projectCard__actions">
        <a
          className="projectCard__link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit <span className="srOnly">(opens in new tab)</span>
        </a>
      </div>
    </article>
  );
}

