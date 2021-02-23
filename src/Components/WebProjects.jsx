import WebProject from "./WebProject";
import { projects } from "../data/projects";
import "./WebProjects.scss";
import CardGroup from "react-bootstrap/CardGroup";

const WebProjects = () => {
  const proj = projects.map((project) => {
    return (
      <WebProject
        name={project.name}
        pic={project.pic}
        description={project.description}
        techStack={project.techStack}
      />
    );
  });

  return (
    <div className="web-container">
      {proj}
    </div>
  );
};

export default WebProjects;
