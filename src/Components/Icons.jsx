import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <ul>
      <li><a style = {{color: "white"}} href = "mailto:sean.oyler@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} /></a></li>
      <li onClick={()=> window.open("https://github.com/xrysen")}><FontAwesomeIcon icon={faGithub} /></li>
      <li onClick={()=> window.open("www.linkedin.com/in/sean-oyler")}><FontAwesomeIcon icon={faLinkedin} /></li>
    </ul>
  )
}

export default Icons;