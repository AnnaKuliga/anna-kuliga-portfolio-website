import React from "react";
import "./Projects.css";
import { projectsData } from "../../../data/data";

//imported icons -->
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const Projects = () => {
  return (
    <div className="Projects full-height" id="projects">
      <div className="project-card">
        {projectsData.map((project, i) => (
          <div className="category" key={i}>
            <div className="name">{project.name}</div>
            <div className="description">{project.description}</div>
            <div className="project-link">
              <a
                href={project.git}
                title={project.name}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href={project.hosting}
                title={project.name}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
