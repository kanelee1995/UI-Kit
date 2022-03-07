import React from "react";
import "./toggle.css";
import { ReactComponent as Checked } from "../Icons/16px/checked.svg";

const Tag = () => {
  let label = "Toggle";
  return (
    <div>
      <div className="container">
        {label}{" "}
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" name={label} id={label} />
          <label className="label" htmlFor={label}>
            <span className="switch" />
            <div className="toggleCheckMark">
              <Checked />
            </div>
            <div className="toggleEndpoint off"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Tag;
