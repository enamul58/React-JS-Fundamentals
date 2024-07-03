import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {count}
      <br />
      <button onClick={addValue}>add</button>
      <button onClick={removeValue}>remove</button>
    </>
  );
}

export default Counter;
