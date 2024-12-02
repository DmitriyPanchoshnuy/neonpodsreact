import "./ActionButton.css";

export default function ActionButton(props) {
  return (
    <button className="ActionButton" onClick={props.onClick}>
        {props.children}
    </button>
  )
}
