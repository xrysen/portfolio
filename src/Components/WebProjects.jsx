import WebProject from "./WebProject";
import { projects } from "../data/projects";

const WebProjects = () => {
  const proj = projects.map((project) => {
    return (
      <WebProject
        name={project.name}
        pic={project.pic}
        description={project.description}
      />
    );
  });

  return (
  <div>{ proj }</div>);
};

export default WebProjects;
