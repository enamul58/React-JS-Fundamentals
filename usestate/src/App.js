import React, { useState } from "react";

function App() {
  // let state = useState();
  let [count, setCount] = useState(50);
  const countFuntion = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={countFuntion}>Click</button>
    </>
  );
}

export default App;
