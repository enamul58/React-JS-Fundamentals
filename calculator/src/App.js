import React from "react";
import { add, sum, multiplication, division } from "./Calculator";

function App() {
  return (
    <>
      <div style={{ fontSize: "20px", color: "purple" }}>
        sum: {add(5, 5)}
        <br />
        subtraction: {sum(5, 5)}
        <br />
        multiplication: {multiplication(5, 5)}
        <br />
        division: {division(5, 5)}
      </div>
    </>
  );
}

export default App;
