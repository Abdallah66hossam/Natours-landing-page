import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button className="btn" type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default Button;
