import React from "react";
import './Button.style.css';
const Button = (props) => {
    return (
        <button onClick={props.action}>{props.bName}</button>
    )
}

export default Button;