const Game = (props) => {
  return (
    <div className="game-project-container">
      <h5>{props.name}</h5>
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
