import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="project-card">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-btns">
          <button
            className="primary-btn"
            onClick={() => window.open(project.live, "_blank")}
          >
            Preview
          </button>
          <button
            className="secondary-btn"
            onClick={() => window.open(project.sourceCode, "_blank")}
          >
            Source Code
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
