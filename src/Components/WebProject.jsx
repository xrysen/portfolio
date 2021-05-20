import Link from "@material-ui/core/Link"

const WebProject = (props) => {
  return (
    <div className="project-container">
      <h4>{props.name}</h4>
      <img
        src={props.pic}
        className="web-pic"
        alt={props.name}
        onClick={() => window.open(props.pic)}
      />
      <p className="description">{props.description}</p>
      <p><strong>Tech Stack:</strong> {props.techStack}</p>
      {props.demo ? <Link onClick = {()=> window.open(props.demo)} className = "link">Demo: {props.demo}</Link> : ""}
      <Link onClick = {()=> window.open(props.github)} className = "link">Github: {props.github}</Link>
    </div>
  );
};

export default WebProject;
