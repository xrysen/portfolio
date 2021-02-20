import "./Games.scss";
import { games } from "../data/projects";

const Games = () => {
  const allGames = games.map((games, i) => {
    return (
      <div key={i}>
        <h4 className = "game-title" onClick={()=> window.open(games.pic)}>{games.name}</h4>
        <p>{games.status}</p>
        <img onClick = {()=> window.open(games.pic)} src = {games.static} alt={games.name} className="game-image" />
      </div>
    )
  })

  return (
    <div className="game-container">
      <h2>Games</h2>
      {allGames}
    </div>
  );
};

export default Games;