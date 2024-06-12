import { useState } from "react";

export default function IncrementDecrementApp() {
  const [show, setShow] = useState(0);

  const setIncre = () => {
    setShow((prevState) => prevState + 1);
  };
  const setDecre = () => {
    if (show === 0) {
      alert("0 not be decresed");
    } else {
      setShow((prevState) => prevState - 1);
    }
  };
  return (
    <>
      <h1>{show}</h1>
      <button onClick={setIncre}>increment</button>
      <button onClick={setDecre}>decrement</button>
    </>
  );
}
