import React from "react";
import "./portfolio.css";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { PageMeta } from "../../components/PageMeta/PageMeta";

export default function portfolio() {
  return (
    <div className="portfolioPage">
      <PageMeta
        title="Projects"
        description="A selection of projects by Felipe Villa — web apps, demos, and code on GitHub."
        path="/portfolio"
      />
      <div className="container">
        <header className="portfolioPage__header">
          <h1 className="portfolioPage__title">Projects</h1>
          <p className="portfolioPage__subtitle">
            A small selection of things I’ve built and shipped.
          </p>
        </header>

        <section aria-label="Project list" className="portfolioGrid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </section>
      </div>
    </div>
  );
}
