import "./About.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';

const About = (props) => {
  return (
    <article className="about">
      Hey there, I'm
      <br />
      <span className="name">
        <strong>
          Sean
          Oyler
        </strong>
      </span>
      <br />
      <span className = "about-two">
        A Full Stack Developer living on Vancouver Island with my beautiful Fiancee. I love solving problems through code, making games and composing music.
      </span>
      <div className = "intro-icons">
        <FontAwesomeIcon icon = {faEnvelope} className = "intro-icon" />
        <FontAwesomeIcon icon = {faGithub} className = "intro-icon" />
        <FontAwesomeIcon icon = {faLinkedin} className = "intro-icon" />
      </div>
      <div className = "bottom-nav">
        <Button onClick={props.web} variant="contained" style={{backgroundColor: "rgba(30, 108, 217, 0.8)", color: "white", display: "inline"}} size="large">Web Projects</Button>
        <br />
        <Button className = "bottom-button" variant="contained" style={{backgroundColor: "rgba(30, 108, 217, 0.8)", color: "white", display: "inline"}} size="large">Game Projects</Button>
      </div>
    </article>
  );
};

export default About;
