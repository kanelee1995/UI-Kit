import React from "react";
import "./badge.css";

const Badge = ({ variant }) => {
  return <div className={`badge ${variant}`} > Your text</div >;
};

export default Badge;
