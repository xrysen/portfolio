import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [msgSent, setMsgSent] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
    setMsgSent(false);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setMsgSent(false);
  };

  const handleMsg = (event) => {
    setMsg(event.target.value);
    setMsgSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`A message from ${name} at ${email} was received: ${msg}`);
    setMsgSent(true);
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <>
      <h1>Contact</h1>
      <p>
        Got a project brewing? New startup? Over-ambitious game idea?! Let's
        chat!
      </p>
      <FontAwesomeIcon
        icon={faEnvelope}
        className="contact-icons-two"
        onClick={() => window.open("http://www.google.com")}
      />
      <FontAwesomeIcon
        icon={faGithub}
        className="contact-icons-two"
        onClick={() => window.open("https://github.com/xrysen")}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        className="contact-icons-two"
        onClick={() =>
          window.open("https://www.linkedin.com/in/sean-oyler-20337370/")
        }
      />
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        ></input>
        <br />
        <br />
        <textarea
          cols="50"
          rows="20"
          value={msg}
          onChange={handleMsg}
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {msgSent && <h2>Message Sent!</h2>}
    </>
  );
};

export default Contact;
