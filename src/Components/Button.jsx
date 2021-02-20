import "./Button.scss";

const Button = (props) => {
  return (
    <div onClick = {props.onClick} className = "button">
      {props.text}
    </div>
  )
}

export default Button;