import React from "react";

const Navigation = (props) => {
  return (
    <div className = "navigation">
      <span className='nav-link'>Portfolio</span>
      <span className='nav-link'>About</span>
      <span className='nav-link'>Contact</span>
      <span className="nav-link" onClick={()=> window.open("https://xrysen.github.io/resume/")}>Resume</span>
    </div>
  )
}

export default Navigation;