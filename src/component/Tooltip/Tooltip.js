import React from "react";
import "./tooltip.css";

const Tag = () => {
  return (
    <div>
      <div className="tooltipContainer toolTip topLeft">
        <span> Your Text in Tooltip</span>
      </div>
      <div className="tooltipContainer toolTip topRight">
        <span> Your Text in Tooltip</span>
      </div>
      <div className="tooltipContainer toolTip bottomRight">
        <span> Your Text in Tooltip</span>
      </div>
      <div className="tooltipContainer toolTip bottomLeft">
        <span> Your Text in Tooltip</span>
      </div>
      <div className="tooltipContainer toolTip left">
        <span> Your Text in Tooltip</span>
      </div>
      <div className="tooltipContainer toolTip right">
        <span> Your Text in Tooltip</span>
      </div>
    </div>
  );
};

export default Tag;
