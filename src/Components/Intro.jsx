import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = (props) => {
  return (
    <div className = "intro">
      <h1>Hi, I'm Sean.</h1>
      <p className="intro-text">I'm a Full Stack Developer from Vancouver Island, Canada. I love solving problems through code, making games and composing music.</p>
      <p className="intro-button" onClick={props.web}>My Web Projects</p>
      <p className="intro-button" onClick={props.games}>My Game Projects</p>

      <div>
        <FontAwesomeIcon icon = {faEnvelope} className = "contact-icons" onClick = {()=> window.open("http://www.google.com")} />
        <FontAwesomeIcon icon = {faGithub} className = "contact-icons" onClick = {()=> window.open("https://github.com/xrysen")} />
        <FontAwesomeIcon icon = {faLinkedin} className = "contact-icons" onClick = {() => window.open("https://www.linkedin.com/in/sean-oyler-20337370/")} />
      </div>
    </div>
  )
}

export default Intro;