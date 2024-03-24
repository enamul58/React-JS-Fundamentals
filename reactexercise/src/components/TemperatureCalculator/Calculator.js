import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenhit } from "./Convater";

export default class Calculator extends React.Component {
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
    console.log(temperature + " " + scale);
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenhit =
      scale === "c" ? convert(temperature, toFahrenhit) : temperature;
    console.log(fahrenhit);
    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.onTemperatureChange}
        ></TemperatureInput>-
        <TemperatureInput
          scale="f"
          temperature={fahrenhit}
          onTemperatureChange={this.onTemperatureChange}
        ></TemperatureInput>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </>
    );
  }
}
