import React from "react";

const Project = (props) => {
  return (
    <div className="project-item">
      <h3 onClick={()=> window.open(props.github)}>{props.name}</h3>
      <img
        src={props.pic}
        alt={props.name}
        className="project-image"
        onClick={() => window.open(props.pic)}
      />
    </div>
  );
};

export default Project;
