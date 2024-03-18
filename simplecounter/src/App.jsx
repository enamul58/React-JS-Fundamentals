import { useState } from "react";
import "./App.css";
import Button from "./../../vite-project/src/Button";

function App() {
  let [count, setCounter] = useState(15);

  const addValue = () => {
    console.log("add value: ", Math.random());
    if (count < 22) {
      setCounter(count + 1);
    }
  };

  let [remove, setRemove] = useState(15);
  const removeValue = () => {
    if (remove > 0) {
      setRemove(remove - 1);
    }
  };

  return (
    <>
      <h1>Simple Count</h1>
      <h2>Add Value: {count}</h2>
      <h2>Remove Value: {remove}</h2>
      <button style={{ marginBottom: 5 }} onClick={addValue}>
        add value {count}
      </button>
      <br />
      <button onClick={removeValue}>remove Value {remove}</button>
    </>
  );
}

export default App;
