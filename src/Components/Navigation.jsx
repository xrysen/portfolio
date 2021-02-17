import React from "react";

const Navigation = (props) => {
  return (
    <div className = "navigation">
      <a onClick = {props.portfolio} className='nav-link'>Portfolio</a>
      <a href = "#" className='nav-link'>About</a>
      <a href = "#" className='nav-link'>Contact</a>
      <a href = "https://xrysen.github.io/resume/" target="new" className="nav-link">Resume</a>
    </div>
  )
}

export default Navigation;