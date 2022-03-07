import React from "react";
import "./selectTag.css";
import Select, {
  components,
  DropdownIndicatorProps,
  PlaceholderProps,
} from "react-select";
import { ReactComponent as Arrowdown } from "../Icons/24px/arrow-down.svg";

const options = [
  { value: "russia", label: "Russia" },
  { value: "usa", label: "USA" },
  { value: "germany", label: "Germany" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#111111" : "#111111",
    padding: 20,
    backgroundColor: state.isSelected ? "white" : "white",
  }),

  control: (provided, state) => ({
    ...provided,
    width: 482,
    height: 56,
    boxShadow: ` 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08)`,
    border: 0,
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
    marginTop: 2,
    marginLeft: 14,
    height: 44,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    position: "absolute",
    marginLeft: 14,
    // transition: `all 0.3s ease`,
    // top: state.isFocused ? -4 : 12,
    // fontSize: state.isFocused ? 13 : 16,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },

  multiValue: (base) => ({
    ...base,
    borderRadius: 4,
    backgroundColor: "#6E41E2",
    // width: 67,
    // height: 28,
    color: "#ffffff",
  }),

  multiValueLabel: (base) => ({
    ...base,
    color: "#ffffff",
    fontSize: 16,
    // lineHeight: 24,
  }),

  multiValueRemove: (provided, state) => ({
    ...provided,
    ":hover": {
      backgroundColor: "#5835B0",
    },
  }),
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

const SelectTag = () => {
  return (
    <div className="selectComponent">
      <Select
        options={options}
        styles={customStyles}
        components={{ DropdownIndicator, Placeholder }}
        placeholder={"Your Country"}
        isClearable
        isMulti
        closeMenuOnSelect={false}
      />
    </div>
  );
};

export default SelectTag;
