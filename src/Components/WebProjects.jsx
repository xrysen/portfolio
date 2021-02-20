import "./WebProjects.scss";
import { webProjects } from "../data/projects";

const WebProjects = () => {
  const web = webProjects.map((projects, i) => {
    return (
      <div key={i}>
        <h4 className = "projects-title" onClick={()=> window.open(projects.github)}>{projects.name}</h4>
        <img
          onClick={() => window.open(projects.pic)}
          src={projects.pic}
          alt={projects.name}
          className="web-image"
          />
          <p>{projects.description}</p>
          <p><strong>Tech Stack:</strong> {projects.techStack}</p>
      </div>
    );
  });

  return (
    <div className="web-projects-container">
      <h2>Web Projects</h2>
      {web}
    </div>
  );
};

export default WebProjects;
