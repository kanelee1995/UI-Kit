import React from "react";
import "./tab.css";

const Tab = ({ size }) => {
  return (
    <div>
      <div className={`tabContainer ${size} default`}>
        <span>Name of Tab</span>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Tab;
