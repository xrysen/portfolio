import React from "react";
import { projects } from "../data/projects";

const Project = (props) => {
  return ( 
    <>
      <img src = {props.pic} alt={props.name} width="479" height="233" />
    </>
  )
}

export default Project;