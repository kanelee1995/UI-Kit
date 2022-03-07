import React, { useState } from "react";
import "./select.css";
import Select, {
  components,
  DropdownIndicatorProps,
  PlaceholderProps,
} from "react-select";
import { ReactComponent as Arrowdown } from "../Icons/24px/arrow-down.svg";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#111111" : "#111111",
    padding: 20,
    backgroundColor: state.isFocused ? "white" : "white",
  }),

  control: (provided, state) => ({
    ...provided,
    width: 482,
    height: 56,
    boxShadow: ` 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08)`,
    border: 0,
    padding: 0,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    padding: 0,
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    padding: 0,
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
  }),

  input: (provided, state) => ({
    ...provided,
    padding: 0,
    marginTop: 16,
    marginLeft: 16,
    height: 44,
  }),

  // placeholder: (provided, state) => ({
  //   ...provided,
  //   position: "absolute",
  //   marginLeft: 14,
  //   transition: `all 0.3s ease`,
  //   top: state.isFocused ? -4 : 12,
  //   fontSize: state.isFocused ? 13 : 16,
  // }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <Arrowdown className="dropDownIndicator" />
    </components.DropdownIndicator>
  );
};

const Placeholder = (props: PlaceholderProps) => {
  return <components.Placeholder {...props} />;
};

const SelectText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="selectComponent">
      <Select
        options={options}
        styles={customStyles}
        components={{ DropdownIndicator }}
        placeholder={""}
        isClearable
      />
      <label className={`placeholder live ${value && "filled"} `}>
        Your Country
      </label>
    </div>
  );
};

export default SelectText;
