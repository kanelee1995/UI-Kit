import React from "react";
import "./filter.css";

const Filter = ({ variant }) => {
  return (
    <div className="filterContainer">
      <div className="filter Left">
        <span>Label</span>
      </div>
      <div className="filter Center">
        <span>Label</span>
      </div>
      <div className="filter Right">
        <span>Label</span>
      </div>
    </div>
  );
};

export default Filter;
