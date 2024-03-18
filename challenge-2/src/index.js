import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currentTime = new Date(2024, 1, 1, 5);
currentTime = currentTime.getHours();

let greeting = "";
const cssStyle = {};

if (currentTime >= 1 && currentTime < 12) {
  greeting = "Gooding Morning";
  cssStyle.color = "Purple";
} else if (currentTime >= 12 && currentTime < 19) {
  greeting = "Gooding Afternon";
  cssStyle.color = "Lime";
} else {
  greeting = "Gooding Night";
  cssStyle.color = "Blue";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
