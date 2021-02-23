import Card from "react-bootstrap/Card";

const WebProject = (props) => {
  return (
    <Card style={{marginTop: "10px", marginBottom: "10px", marginLeft: "30px", marginRight: "30px" }}>
      <Card.Img variant="top" src={props.pic} onClick={()=> window.open(props.pic)} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {props.techStack}
      </Card.Footer>
    </Card>
  );
};

export default WebProject;
