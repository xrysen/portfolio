import introPic from "../assets/me.jpg";
import "./IntroPic.scss";

const IntroPic = () => {
  return (
    <div className="intro-pic-container">
      <img src={introPic} width="300" alt="Profile" />
    </div>
  )
}

export default IntroPic;