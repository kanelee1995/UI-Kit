import React from "react";
import "./toggle.css";
import { ReactComponent as Checked } from "../Icons/16px/checked.svg";

const Tag = () => {
  return (
    <div>
      <div className="toggleContainer">
        <div className="toggleBody left off">
          <div className="toggleButton off"></div>
          <div className="toggleEndpoint off"></div>
        </div>
        <div className="toggleRight">
          <span className="toggleTitle">Title</span>
          <span className="describtion">Describtion</span>
        </div>
      </div>
      <div className="toggleContainer">
        <div className="toggleBody left on">
          <div className="toggleButton on"></div>
          <div className="toggleEndpoint on">
            <Checked />
          </div>
        </div>
        <div className="toggleRight">
          <span className="toggleTitle">Title</span>
          <span className="describtion">Describtion</span>
        </div>
      </div>
    </div>
  );
};

export default Tag;
