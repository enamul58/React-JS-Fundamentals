import React from "react";

const setTemperature = {
  c: "celcius",
  f: "fahrenhit",
};
export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter Temperature {setTemperature[scale]}</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}
