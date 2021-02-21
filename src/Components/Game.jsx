import "./Games.scss";

const Game = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.pic} alt="game" className="game-pic" />
    </>
  );
};

export default Game;
