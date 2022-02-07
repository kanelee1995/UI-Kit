import React from "react";
import "./checkbox.css";

const Checkbox = () => {
  return (
    <label className="checkboxContainer">
      Text
      <input id="checkbox" type={"checkbox"} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
