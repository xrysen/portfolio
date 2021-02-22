import "./Intro.scss";
import { Container, Grid } from "@material-ui/core";
import profilePic from "../assets/me.jpg";

const Intro = () => {
  return (
    <div className="intro-container">
      <img className="profile-image" src={profilePic} alt="Profile" />
      <p className="intro-p">
        Hi, I'm <br />
        <strong>Sean Oyler</strong>
        <br />
        <span className="description">
          A Full Stack Web and Indie Game Developer living on Vancouver Island
          with my beautiful Fiancee. I love solving problems through code,
          making games and composing music.
        </span>
      </p>
    </div>
  );
};

export default Intro;
