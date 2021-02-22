import "./Intro.scss";
import profilePic from "../assets/me.jpg";

const Intro = () => {
  return (
    <div className="intro-container">
      <img className = "profile-image" src={profilePic} alt="Profile" />
    </div>
  );
};

export default Intro;
