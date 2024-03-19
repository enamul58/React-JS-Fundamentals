import React, { useState } from "react";

export default function CounterApp() {
  let [value, setValue] = useState(0);
  //add value
  const increment = () => {
    setValue(value + 1);
  };
  //minus value
  const decrement = () => {
    setValue(value - 1);
  };

  const resetPlusMinus = () => {
    setValue(0);
  };
  return (
    <div>
      {value}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetPlusMinus}>0</button>
    </div>
  );
}
