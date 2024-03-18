import React, { useState } from "react";

export default function CountWithHook() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
    //setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>hook</button>
    </div>
  );
}
