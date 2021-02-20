import "./About.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const About = () => {
  return (
    <article className="about">
      Hey there, I'm
      <br /><br />
      <span className="name">
        <strong>
          Sean
          Oyler
        </strong>
      </span>
      <p>A Full Stack Developer living on Vancouver Island with my beautiful Fiancee. I love solving problems through code, making games and composing music.</p>
      <div className = "intro-icons">
        <FontAwesomeIcon icon = {faEnvelope} className = "intro-icon" />
        <FontAwesomeIcon icon = {faGithub} className = "intro-icon" />
        <FontAwesomeIcon icon = {faLinkedin} className = "intro-icon" />
      </div>
      <div className = "bottom-nav">
        <Button text = "Web Projects" />
        <Button text = "Game Projects" />
      </div>
    </article>
  );
};

export default About;
