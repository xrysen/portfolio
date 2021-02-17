import React from "react";

const Intro = (props) => {
  return (
    <div className = "intro">
      <h1>Hi, I'm Sean.</h1>
      <p className="intro-text">I'm a Full Stack Web Developer from Vancouver Island, Canada. I love solving problems through code, making games and composing music.</p>
      <p className = "intro-button" onClick={props.onClick}>My Projects</p>
    </div>
  )
}

export default Intro;