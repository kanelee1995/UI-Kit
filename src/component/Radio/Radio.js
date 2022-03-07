import React from "react";
import "./radio.css";

const Radio = () => {
  return (
    <label className="checkboxContainer">
      Text
      <input id="radio" type={"checkbox"} />
      <span className="checkmark radio"></span>
    </label>
  );
};

export default Radio;
