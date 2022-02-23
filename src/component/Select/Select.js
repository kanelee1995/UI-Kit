import React from "react";
import "./select.css";
import { ReactComponent as Checked } from "../Icons/16px/checked.svg";

const Select = () => {
  return (
    <div>
      <form className="selectBody shadow">
        <select name="country" id="country">
          <option value="" disabled selected hidden>
            Your country
          </option>
          <option value="usa">USA</option>
          <option value="russia">Russia</option>
          <option value="germany">Germany</option>
        </select>
      </form>
    </div>
  );
};

export default Select;
