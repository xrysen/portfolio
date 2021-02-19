import React from "react";

const Navigation = (props) => {
  return (
    <ul>
      <li className="nav-link" onClick={props.intro}>Home</li>
      <li className="nav-link" onClick={props.onClick}>Web</li>
      <li className="nav-link" onClick={props.games}>Games</li>
      <li className='nav-link' onClick={props.about}>About</li>
      <li className='nav-link' onClick={props.contact}>Contact</li>
      <li className="nav-link" onClick={()=> window.open("https://xrysen.github.io/resume/")}>Resume</li>
      <li className="nav-link" onClick={()=> window.open("https://verge-rpg.com/topic/33/rysen-s-devlog")}>Blog</li>
    </ul>
  )
}

export default Navigation;