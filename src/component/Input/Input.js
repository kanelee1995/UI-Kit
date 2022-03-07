import React, { useState } from "react";
import "./input.css";
import { MdOutlineCheck } from "react-icons/md";

const Input = ({ style, label }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // const myStyle = {
  //   width: "482px"
  // }

  return (
    <div>
      <div className="inputContainer live">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="input"
          style={style}
        />
        <label className={`placeholder live ${value && "filled"} `}>
          {label}
        </label>
      </div>
      {/* <div className="inputContainer error">
        <span className="placeholder">Your name</span>
        <span className="errorText">Error, please try again</span>
      </div>
      <div className="inputContainer error">
        <div className="left">
          <span className="placeholderFilled">Your name</span>
          <span className="inputValue">John Doe</span>
        </div>
        <span className="errorText">Error, please try again</span>
      </div>
      <div className="inputContainer success">
        <div className="left">
          <span className="placeholderFilled">Your name</span>
          <span className="inputValue">John Doe</span>
        </div>
        <div className="right">
          <span className="checkMark">
            <MdOutlineCheck size={24} />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Input;
