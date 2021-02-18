import React, {useState} from "react";

const Game = (props) => {
  const [pic, setPic] = useState(props.static);

  const handleMouseEnter = () => {
    setPic(props.pic);
  }

  const handleMouseOut = () => {
    setPic(props.static);
  }

  return (
    <div className="project-item">
      <h3 className="project-name">{props.name}</h3>
      <img
        src={pic}
        alt={props.name}
        className="game-image"
        onClick={() => window.open(props.pic)}
        onMouseEnter={ handleMouseEnter}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default Game;
