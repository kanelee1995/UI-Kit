import React from "react";
import "./popup.css";
import { MdClear } from "react-icons/md";
import { ReactComponent as Attention } from "../Icons/Attention.svg";
import Input from "../Input/Input"

const Popup = ({ children }) => {

  const myStyle = {
    width: "431px",
  }

  return (
    <div>
      <div className="popupContainer">
        <button className="indicator err">
          <span className="indicatorCheck err">
            <MdClear size={24} />
          </span>
        </button>
        <span className="warning">
          <Attention className="warningLogo" />
        </span>
        <span className="warningHeading">Do you want delete?</span>
        <span className="warningText">You can't restore this file</span>
        <div className="popupButtonGroup">
          <button className="button Primary">Delete</button>
          <button className="button Secondary">Cancel</button>
        </div>
      </div>

      <div className="popupContainer form">
        <button className="indicator err">
          <span className="indicatorCheck err">
            <MdClear size={24} />
          </span>
        </button>
        <span className="warningHeading">Leave your contact</span>
        <span className="warningText">We want to know all about you</span>
        <div>
          <Input style={myStyle} label={"Your Name"} />
          <Input style={myStyle} label={"Your Phone"} />
          <Input style={myStyle} label={"Your Country"} />
        </div>
        <div>
          <button className="button Primary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
