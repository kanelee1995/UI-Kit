import React from "react";
import "./checkbox.css";
import { ReactComponent as Checked } from "../Icons/16px/checked.svg";

const Checkbox = () => {
  return (
    <div>
      <label className="checkboxContainer">
        <span>Text</span>
        <input id="checkbox" type={"checkbox"} />
        <span className="checkmarkContainer">
          <Checked className="checkmark" />
        </span>
      </label>

      {/* Error */}

      <label className="checkboxContainer">
        <span className="error">Text</span>
        <input id="checkboxError" type={"checkbox"} disabled/>
        <span className="checkmarkContainer error">
          {/* <Checked className="checkmark" /> */}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
