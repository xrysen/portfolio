const Game = (props) => {
  return (
    <div className="project-container">
      <h6>{props.name}</h6>
      <img
        src={props.pic}
        className="game-pic"
        alt={props.name}
        onClick={() => window.open(props.ani)}
      />
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Game;
