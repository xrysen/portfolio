import WebProject from "./WebProject";
import { projects } from "../data/projects";
import "./WebProjects.scss";
import CardDeck from "react-bootstrap/CardDeck";

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
      <CardDeck>{proj}</CardDeck>
    </div>
  );
};

export default WebProjects;
