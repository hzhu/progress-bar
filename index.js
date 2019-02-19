import React from "react";
import propTypes from "prop-types";

export const Progress = props => {
  return (
    <div
      data-testid="progress"
      style={{
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#DDDDDD",
        borderRadius: ".25rem"
      }}
    >
      {props.children}
    </div>
  );
};

export const ProgressBar = ({
  value = 0,
  max = 100,
  min = 0,
  label,
  styleObject = {}
}) => (
  <div
    data-testid="progressbar"
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={min}
    aria-valuemax={max}
    style={{
      color: "#FFF",
      width: "100%",
      height: "1rem",
      display: "flex",
      flexWrap: "nowrap",
      textAlign: "center",
      justifyCenter: "center",
      flexDirection: "column",
      backgroundColor: "#4286f4", // default progress bar background color
      transform: `scaleX(${value / 100})`,
      transformOrigin: "top left",
      animation: "none",
      transition: "transform 250ms ease",
      ...styleObject
    }}
  >
    {label ? label : null}
  </div>
);
