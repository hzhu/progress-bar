import React from "react";
import propTypes from "prop-types";
const ROUND_PRECISION = 1000;

function getPercentage(now, min, max) {
  now = Number(now);
  min = Number(min);
  max = Number(max);
  const percentage = ((now - min) / (max - min)) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

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
}) => {
  const percentage = getPercentage(value, min, max);
  return (
    <div
      data-testid="progressbar"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      style={{
        height: "1rem",
        display: "flex",
        color: "#FFF",
        textAlign: "center",
        flexWrap: "nowrap",
        flexDirection: "column",
        justifyCenter: "center",
        backgroundColor: "#4286f4", // default progress bar background color
        width: `${percentage}%`,
        transition: "width .1s ease-in",
        ...styleObject
      }}
    >
      {label ? label : null}
    </div>
  );
};
