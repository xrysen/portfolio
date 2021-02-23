import "./Intro.scss";
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
          A Full Stack and Indie Game Developer living on Vancouver Island,
          with my beautiful Fiancée. I love solving problems through code,
          making games and composing music.
        </span>
        <br />
        <button>Learn More</button>
      </p>
    </div>
  );
};

export default Intro;
