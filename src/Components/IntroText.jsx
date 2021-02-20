import "./IntroText.scss";
import Button from "./Button";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IntroText = (props) => {
  return (
    <>
      <h3>Hi, I'm Sean</h3>
      <p>
        I'm a Full Stack Developer living on Vancouver Island, Canada, with my
        beautiful Fiancée. I love solving problems through code, making games
        and composing music.
      </p>

      <div className="intro-buttons">
        <Button onClick={props.web} text="Web Projects" />
        <Button text="Game Projects" />
      </div>
      <div className = "icons">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="contact-icons"
          onClick={() => window.open("http://www.google.com")}
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="contact-icons"
          onClick={() => window.open("https://github.com/xrysen")}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="contact-icons"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sean-oyler-20337370/")
          }
        />
      </div>
    </>
  );
};

export default IntroText;
