import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return(
    <>
      <h1>Contact</h1>
      <p>Got a project brewing? New startup? Over-ambitious game idea?! Let's chat!</p>
      <FontAwesomeIcon icon = {faEnvelope} className = "contact-icons-two" onClick = {()=> window.open("http://www.google.com")} />
      <FontAwesomeIcon icon = {faGithub} className = "contact-icons-two" onClick = {()=> window.open("https://github.com/xrysen")} />
      <FontAwesomeIcon icon = {faLinkedin} className = "contact-icons-two" onClick = {() => window.open("https://www.linkedin.com/in/sean-oyler-20337370/")} />
      <form id = "contact-form">
        <input type="text" placeholder="Name"></input>
        <br /><br />
        <input type="text" placeholder="Email"></input>
        <br /><br />
        <textarea cols="50" rows="20"></textarea>
      </form>
    </>
  )
}

export default Contact;