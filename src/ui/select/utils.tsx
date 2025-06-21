/* eslint-disable @typescript-eslint/no-explicit-any */
import { IndicatorSeparatorProps } from "react-select";

export const indicatorSeparatorStyle = {
  alignSelf: "stretch",
  backgroundColor: "transparant",
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};

export const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

export const customStyles = {
  control: (provided: any, state: any) => ({
    // class attribute : class=" css-i32vvf-control"
    ...provided,
    width: "150px",
    height: "40px",
    overflow: "visible",
    background: state.isFocused ? "#F6F6F6" : "#F4F4F4",
    display: "flex",
    flexWrap: "nowrap",
    borderRadius: "12px",
    border: "none",
    borderColor: state.isFocused
      ? "transparant"
      : state.isSelected
        ? "transparant"
        : "transparant",
    boxShadow: "none",
  }),
  menu: (provided: any) => ({
    // 'menu' is from the div class too.
    ...provided,
    background: "#ffffff",
    width: "100%",
    borderRadius: "12px",
    border: "none",
    boxShadow: "none",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    width: "150px",
    height: "40px",
    backgroundColor: state.isSelected
      ? "#F0F1F1"
      : state.isFocused
        ? "#F6F6F6"
        : "#ffffff",
    color: state.isSelected
      ? "#232325"
      : state.isFocused
        ? "#232325"
        : "#232325",
    whiteSpace: "nowrap",
  }),
};
