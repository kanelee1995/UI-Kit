import React from "react";
import "./tag.css";
// import { MdClear } from "react-icons/md";
import { ReactComponent as Close } from "../Icons/16px/close.svg";
const Tag = ({ variant }) => {
  return (
    <div>
      <div className="tagContainer s">
        <span>Tag</span>
        <Close />
      </div>
      <div className="tagContainer s primary">
        <span>Tag</span>
        <Close />
      </div>
      <div className="tagContainer m">
        <span>Tag</span>
        <Close />
      </div>
      <div className="tagContainer m primary">
        <span>Tag</span>
        <Close />
      </div>
    </div>
  );
};

export default Tag;
