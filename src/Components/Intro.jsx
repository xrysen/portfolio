import "./Intro.scss";
import profilePic from "../assets/me.jpg";
import Button from "react-bootstrap/Button";

const Intro = (props) => {
  return (
    <div className="intro-container">
      <img className="profile-image" src={profilePic} alt="Profile" />
      <p className="intro-p">
        Hi, I'm <br />
        <strong>Sean Oyler</strong>
        <br />
        <span className="description">
          A Full Stack and Indie Game Developer living on Vancouver Island. I love solving problems through code,
          making games and composing music.
        </span>
        <br /><br />
        <Button onClick={props.click} style={{marginRight: "10px"}}>Learn More</Button>
        <Button onClick={props.web}>Web</Button>
      </p>
    </div>
  );
};

export default Intro;
