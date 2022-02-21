import React from "react";
import "./input.css";
import { MdOutlineCheck } from "react-icons/md";

const Input = ({ children }) => {
  return (
    <div>
      {/* Default */}
      <div className="inputContainer">
        <span className="placeholder">Your name</span>
      </div>
      {/* Default filled */}
      <div className="inputContainer">
        <div className="left">
          <span className="placeholder input">Your name</span>
          <span className="inputValue">John Doe</span>
        </div>
      </div>
      {/* Active */}
      <div className="inputContainer active">
        <div className="left">
          <span className="placeholder input">Your name</span>
          <span className="inputValue">|</span>
        </div>
      </div>
      {/* Error */}
      <div className="inputContainer error">
        <span className="placeholder">Your name</span>
      </div>
      {/* Error filled */}
      <div className="inputContainer error">
        <div className="left">
          <span className="errorText">Error, please try again</span>
          <span className="placeholder input">Your name</span>
          <span className="inputValue">John Doe</span>
        </div>
      </div>
      {/* Success filled */}
      <div className="inputContainer success">
        <div className="left">
          <span className="errorText">Error, please try again</span>
          <span className="placeholder input">Your name</span>
          <span className="inputValue">John Doe</span>
        </div>
        <div className="right">
          <span className="checkMark">
            <MdOutlineCheck size={24} />0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Input;
