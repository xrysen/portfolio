import React from "react";
import Project from "./Project";
import { projects } from "../data/projects";

const Projects = () => {

  const list = projects.map((proj) => {
    return (
      <Project key = {proj.id}
      name = {proj.name}
      description = {proj.description}
      pic = {proj.pic}
      demo = {proj.demo}
      github = {proj.github}
      techStack = {proj.techStack} />
    )
  });


  return (
    <div>
      <h1>Web Projects</h1>
      <div className="projects-preview">
        {list}
      </div>
    </div>
  );
};

export default Projects;
