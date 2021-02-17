import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-preview">
        <Project pic="https://github.com/xrysen/pixel-editor/raw/master/docs/ss1.png?raw=true" />
      </div>
    </div>
  );
};

export default Projects;
