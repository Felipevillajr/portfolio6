import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { PageMeta } from "../../components/PageMeta/PageMeta";

export default function home() {
  return (
    <div className="homePage">
      <PageMeta
        title="Home"
        description="Felipe Villa — front-end focused web developer. I build clean, modern interfaces and ship projects that feel great to use."
        path="/"
      />
      <div className="container">
        <section className="homeHero">
          <div className="homeHero__left">
            <p className="homeHero__eyebrow">Hi, I’m Felipe.</p>
            <h1 className="homeHero__title">
              I build clean, modern web experiences—and I’m always learning.
            </h1>
            <p className="homeHero__lead">
              I’m a front-end focused developer who enjoys thoughtful UI, solid
              fundamentals, and shipping projects that feel great to use.
            </p>

            <div className="homeHero__cta">
              <Link className="btn btnPrimary" to="/portfolio">
                View projects
              </Link>
              <a
                className="btn btnSecondary"
                href="mailto:felipevilla.webdev@gmail.com?subject=Hello%20Felipe"
              >
                Email me
              </a>
            </div>
          </div>

          <div className="homeHero__right" aria-hidden="true">
            <div className="heroCard">
              <div className="heroCard__top">
                <div className="heroCard__dot"></div>
                <div className="heroCard__dot"></div>
                <div className="heroCard__dot"></div>
              </div>
              <div className="heroCard__content">
                <div className="heroCard__line"></div>
                <div className="heroCard__line"></div>
                <div className="heroCard__line heroCard__lineShort"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="homeSection" aria-label="Featured projects">
          <header className="homeSection__header">
            <h2 className="homeSection__title">Featured projects</h2>
            <p className="homeSection__subtitle">
              A few highlights—see the full list on the Projects page.
            </p>
          </header>

          <div className="homeGrid">
            {projects.slice(0, 2).map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section className="homeSection" aria-label="Skills">
          <header className="homeSection__header">
            <h2 className="homeSection__title">Skills</h2>
            <p className="homeSection__subtitle">
              Tools I’m comfortable with and use regularly.
            </p>
          </header>

          <div className="skillsGrid">
            <div className="skillCard">
              <h3 className="skillCard__title">Frontend</h3>
              <p className="skillCard__body">
                React, JavaScript, HTML, CSS, responsive UI.
              </p>
            </div>
            <div className="skillCard">
              <h3 className="skillCard__title">Backend basics</h3>
              <p className="skillCard__body">Node.js, REST, MySQL.</p>
            </div>
            <div className="skillCard">
              <h3 className="skillCard__title">UI & delivery</h3>
              <p className="skillCard__body">
                Component design, accessibility, performance-minded polish.
              </p>
            </div>
          </div>
        </section>

        <section className="homeSection" aria-label="Contact">
          <div className="contactCard">
            <div>
              <h2 className="contactCard__title">Let’s connect</h2>
              <p className="contactCard__body">
                Want to chat about a role, a project, or just web dev? Email me
                and I’ll reply.
              </p>
            </div>
            <a
              className="btn btnPrimary"
              href="mailto:felipevilla.webdev@gmail.com?subject=Hello%20Felipe"
            >
              felipevilla.webdev@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
