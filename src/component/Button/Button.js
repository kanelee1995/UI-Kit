import React from "react";
import "./button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <div className="container">
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
      <button className={`button ${variant} Plus `} {...rest}>
        <span className="plusIcon">
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </span>
        {children}
      </button>
      <button className={`button ${variant} Plus NoText `} {...rest}>
        <span className="plusIcon">
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </span>{" "}
      </button>
      <button className={`button ${variant} Plus NoTextCircle `} {...rest}>
        <span className="plusIcon">
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </span>
      </button>
      <button className={`button ${variant} Rounded `} {...rest}>
        {children}
      </button>
      <button className={`button ${variant} Plus Rounded`} {...rest}>
        <span className="plusIcon">
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </span>
        {children}
      </button>
    </div>
    // <div className="container">
    //   <button className={"Default button"} {...rest}>
    //     {children}
    //   </button>
    //   <button className={"Default button Plus"} {...rest}>
    //     <span className="plusIcon">
    //       <FontAwesomeIcon icon={faPlus} size="lg" />
    //     </span>
    //     {children}
    //   </button>
    //   <button className={"Default button Plus NoText"} {...rest}>
    //     <span className="plusIcon">
    //       <FontAwesomeIcon icon={faPlus} size="lg" />
    //     </span>{" "}
    //   </button>
    //   <button className={"Default button Plus NoTextCircle"} {...rest}>
    //     <span className="plusIcon">
    //       <FontAwesomeIcon icon={faPlus} size="lg" />
    //     </span>
    //   </button>
    //   <button className={"Default button Rounded"} {...rest}>
    //     {children}
    //   </button>
    //   <button className={"Default button Plus Rounded"} {...rest}>
    //     <span className="plusIcon">
    //       <FontAwesomeIcon icon={faPlus} size="lg" />
    //     </span>
    //     {children}
    //   </button>
    // </div>
  );
};

export default Button;
