import ProjectsData from "./../Data/Projects.json";
import ProjectCard from "../Components/Project Cards/ProjectCard";

const Project = () => {
  const projects = [...ProjectsData.projects];

  return (
    <>
      <div className="page">
        <div className=" work-section">
          <div className="work-intro">
            <h3>🗂️ My Projects</h3>
            <p>
              In my projects, I apply what I'm learning to build real-world
              applications. You'll see a variety of projects showcasing my
              problem-solving skills as I explore new technologies and
              frameworks.
            </p>
          </div>
          <div className="work-container">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
