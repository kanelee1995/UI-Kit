import React from "react";
import "./notification.css";
import Button from "../Button/Button";
import { MdOutlineCheck } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";

const Notification = ({ children }) => {
  return (
    <div>
      <div className="notiContainer">
        <span className="head">Head</span>
        <span className="description">Description</span>
        <div className="notiButton">
          <button className="button Secondary">Close</button>
          <button className="button Flat">Help</button>
        </div>
        <button className="indicator">
          <span className="indicatorCheck">
            <MdOutlineCheck size={24} />
          </span>
        </button>
      </div>
      <div className="notiContainer">
        <span className="head">Head</span>
        <span className="description">Description</span>
        <div className="notiButton">
        <button className="button Secondary">Close</button>
          <button className="button Flat">Help</button>
        </div>
        <button className="indicator err">
          <span className="indicatorCheck err">
            <MdClear size={24} />
          </span>
        </button>
      </div>
      <div className="notiContainer">
        <span className="head">Head</span>
        <span className="description">Description</span>
        <div className="notiButton">
        <button className="button Secondary">Close</button>
          <button className="button Flat">Help</button>
        </div>
        <button className="indicator info">
          <span className="indicatorCheck info">
            <MdErrorOutline size={24} />
          </span>
        </button>
      </div>
      <div className="notiContainerM">
        <button className="indicator">
          <span className="indicatorCheck">
            <MdOutlineCheck size={24} />
          </span>
        </button>
        <span className="description">We sent the password on your email</span>
      </div>
    </div>
  );
};

export default Notification;
