import { projects } from "../data/projects";
import WebProject from "./WebProject";
import "./WebProjects.scss";

const WebProjects = () => {

  const webProjects = projects.map((project, i) => {
    return (
      <WebProject
        key={i}
        name={project.name}
        pic={project.pic}
        description={project.description}
        techStack={project.techStack}
      />
    );
  });

  return (
    <div className="web-projects">
      <h1>Web Projects</h1>
      {webProjects}
    </div>
  );
};

export default WebProjects;
