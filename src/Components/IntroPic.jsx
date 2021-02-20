import introPic from "../assets/me.jpg";
import "./IntroPic.scss";

const IntroPic = () => {
  return (
    <div className="intro-pic-container">
      <img src={introPic} className="intro-pic" alt="Profile" />
    </div>
  )
}

export default IntroPic;