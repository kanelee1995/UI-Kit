import React from "react";
import "./button.css";
import { ReactComponent as Plus } from "../Icons/24px/plus.svg";

const Button = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <div className="container">
      <button className={`button ${variant}`} {...rest}>
        <span className="buttonLabel">{children}</span>
      </button>
      <button className={`button ${variant} Plus `} {...rest}>
        <span className="plusIcon">
          <span>
            <Plus />
          </span>{" "}
        </span>
        <span className="buttonLabel">{children}</span>
      </button>
      <button className={`button ${variant} Plus NoText `} {...rest}>
        <span className="plusIcon">
          <span>
            <Plus />
          </span>{" "}
        </span>{" "}
      </button>
      <button className={`button ${variant} Plus NoTextCircle `} {...rest}>
        <span className="plusIcon">
          <span>
            <Plus />
          </span>{" "}
        </span>
      </button>
      <button className={`button ${variant} Rounded `} {...rest}>
        <span className="buttonLabel">{children}</span>
      </button>
      <button className={`button ${variant} Plus Rounded`} {...rest}>
        <span className="plusIcon">
          <span>
            <Plus />
          </span>{" "}
        </span>
        <span className="buttonLabel">{children}</span>
      </button>
    </div>
  );
};

export default Button;
