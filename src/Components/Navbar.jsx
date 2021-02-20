import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <div className="nav">
      <ul>
        <li onClick = {props.web}>Web</li>
        <li onClick = {props.games}>Games</li>
        <li onClick = {props.about}>About</li>
        <li onClick = {props.contact}>Contact</li>
        <li onClick={() => window.open("https://xrysen.github.io/resume/")}>Resume</li>
        <li onClick={() => window.open("https://verge-rpg.com/topic/33/rysen-s-devlog")}>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar;
