import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { Progress, ProgressBar } from "../index";

storiesOf("Progress", module)
  .addDecorator(withKnobs)
  .add("single", () => {
    const label = "value";
    const defaultValue = 24;
    const options = {
      range: true,
      min: 0,
      max: 100,
      step: 1
    };
    const value = number(label, defaultValue, options);
    return (
      <div style={{ margin: "24px" }}>
        <Progress>
          <ProgressBar
            value={value}
            max={100}
            styleObject={{ backgroundColor: "purple" }}
          />
        </Progress>
      </div>
    );
  })
  .add("stacked", () => {
    const knobs = {
      "Progress Bar 1": number("Progress Bar 1", 33.33, {
        range: true,
        min: 0,
        max: 33.33,
        step: 0.01
      }),
      "Progress Bar 2": number("Progress Bar 2", 33.33, {
        range: true,
        min: 0,
        max: 33.33,
        step: 0.01
      }),
      "Progress Bar 3": number("Progress Bar 3", 0, {
        range: true,
        min: 0,
        max: 33.33,
        step: 0.01
      })
    };
    return (
      <div style={{ margin: "24px" }}>
        <Progress>
          <ProgressBar
            value={knobs["Progress Bar 1"]}
            styleObject={{ backgroundColor: "#0074D9" }}
          />
          <ProgressBar
            value={knobs["Progress Bar 2"]}
            styleObject={{ backgroundColor: "#3D9970" }}
          />
          <ProgressBar
            value={knobs["Progress Bar 3"]}
            styleObject={{ backgroundColor: "#B10DC9" }}
          />
        </Progress>
      </div>
    );
  });
