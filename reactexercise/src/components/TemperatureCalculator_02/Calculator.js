import React, { Component } from "react";
import { toFahrenhit, toCelcius, convert } from "./TemperatureConverter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  onTemperatureChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celcius =
      scale === "f" ? convert(temperature, toCelcius) : temperature;
    const fahrenhit =
      scale === "c" ? convert(temperature, toFahrenhit) : temperature;
    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onTemperatureChange={this.onTemperatureChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenhit}
          onTemperatureChange={this.onTemperatureChange}
        />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </>
    );
  }
}
