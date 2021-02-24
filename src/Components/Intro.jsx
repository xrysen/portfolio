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
        <br />
        <Button onClick={props.click} style={{marginRight: "10px", marginTop: "10px"}}>Learn More</Button>
        <Button onClick={props.web} style={{marginRight: "10px", marginTop: "10px"}}>Web Projects</Button>
        <Button onClick={props.games} style={{marginRight: "10px", marginTop: "10px"}}>Game Projects</Button>
        <Button onClick={()=> window.open("https://xrysen.github.io/resume/")} style={{marginRight: "10px", marginTop: "10px"}}>Resume</Button>
        <Button onClick={()=> window.open("https://verge-rpg.com/topic/33/rysen-s-devlog")} style={{marginRight: "10px", marginTop: "10px"}}>Blog</Button>
      </p>
    </div>
  );
};

export default Intro;
