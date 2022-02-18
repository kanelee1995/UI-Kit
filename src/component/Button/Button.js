import React from "react";
import "./button.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { HiPlus } from "react-icons/hi";

const Button = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <div className="container">
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
      <button className={`button ${variant} Plus `} {...rest}>
        <span className="plusIcon">
          <span>
            <HiPlus size={24} />
          </span>{" "}
        </span>
        {children}
      </button>
      <button className={`button ${variant} Plus NoText `} {...rest}>
        <span className="plusIcon">
          <span>
            <HiPlus size={24} />
          </span>{" "}
        </span>{" "}
      </button>
      <button className={`button ${variant} Plus NoTextCircle `} {...rest}>
        <span className="plusIcon">
          <span>
            <HiPlus size={24} />
          </span>{" "}
        </span>
      </button>
      <button className={`button ${variant} Rounded `} {...rest}>
        {children}
      </button>
      <button className={`button ${variant} Plus Rounded`} {...rest}>
        <span className="plusIcon">
          <span>
            <HiPlus size={24} />
          </span>{" "}
        </span>
        {children}
      </button>
    </div>
  );
};

export default Button;
