import "./Input.css";

function Input(props) {
  return (
    <div className="form--group--item">
      <label htmlFor={props.Id}>Book Name</label>
      <input
        type="text"
        id={props.Id}
        value={props.value}
        style={props.style}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
