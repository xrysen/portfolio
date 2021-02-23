import Card from "react-bootstrap/Card";

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
      <p>Tech Stack: {props.techStack}</p>
    </div>
  );
};

export default WebProject;
