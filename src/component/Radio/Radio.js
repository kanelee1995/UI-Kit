import React from "react";
import "./radio.css";

const Radio = () => {
  return (
    <label className="checkboxContainer">
      <span className="radioText">Text</span>
      <input id="radio" type={"checkbox"} />
      <span className="checkmark radio"></span>
    </label>
  );
};

export default Radio;
