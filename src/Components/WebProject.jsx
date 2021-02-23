const WebProject = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src = {props.pic} alt = {props.name} />
      <p>{props.description}</p>
    </div>
  )
}

export default WebProject;