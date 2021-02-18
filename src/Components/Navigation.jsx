import React from "react";

const Navigation = (props) => {
  return (
    <div className = "navigation">
      <span className="nav-link" onClick={props.intro}>Home</span>
      <span className="nav-link" onClick={props.onClick}>Web</span>
      <span className="nav-link" onClick={props.games}>Games</span>
      <span className='nav-link' onClick={props.about}>About</span>
      <span className='nav-link' onClick={props.contact}>Contact</span>
      <span className="nav-link" onClick={()=> window.open("https://xrysen.github.io/resume/")}>Resume</span>
      <span className="nav-link" onClick={()=> window.open("https://verge-rpg.com/topic/33/rysen-s-devlog")}>Blog</span>
    </div>
  )
}

export default Navigation;