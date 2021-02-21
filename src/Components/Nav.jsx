import "./Nav.scss";

const Nav = (props) => {
  return (
    <ul>
      <li onClick={props.web}>Web</li>
      <li>Games</li>
      <li>About</li>
      <li onClick={()=> window.open("https://xrysen.github.io/resume/")}>Resume</li>
      <li onClick={()=> window.open("https://verge-rpg.com/topic/33/rysen-s-devlog")}>Blog</li>
    </ul>
  )
}

export default Nav;