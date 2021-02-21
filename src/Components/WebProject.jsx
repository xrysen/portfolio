import "./WebProjects.scss";

const WebProject = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <img src = {props.pic} alt="Project" className = "web-pic" />
      <p className="web-p">{props.description}</p>
      <p className="web-p"><strong>Tech Stack: </strong>{props.techStack}</p>
    </>
  )
}

export default WebProject;