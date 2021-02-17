import React from "react";

const Navigation = (props) => {
  return (
    <div className = "navigation">
      <span className="nav-link" onClick={props.onClick}>Projects</span>
      <span className='nav-link' onClick={props.onClick}>About</span>
      <span className='nav-link' onClick={props.onClick}>Contact</span>
      <span className="nav-link" onClick={()=> window.open("https://xrysen.github.io/resume/")}>Resume</span>
    </div>
  )
}

export default Navigation;