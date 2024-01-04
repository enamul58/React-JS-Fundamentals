import React from "react";

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

function App() {
  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
