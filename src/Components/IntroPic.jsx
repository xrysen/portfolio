import React from "react";
import pic from "../assets/me.jpg";

const IntroPic = () => {
  return (
    <div className = "intro-pic-container">
      <img src = {pic} alt="Me" width="300" className="intro-pic" />
    </div>
  )
}

export default IntroPic;