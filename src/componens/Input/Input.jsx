import react from "react";
import './Input.style.css';
const Input = (props) => {
    return (
        <div className="Form-input">
            <input className="input" type="text" min="0" onChange={props.getValue} name={props.name} value={props.value}/>
        </div>
    );
}


export default Input;