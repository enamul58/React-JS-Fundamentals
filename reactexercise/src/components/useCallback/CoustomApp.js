import { useState } from "react";
import Title from "./Title";
import ShowCount from "./ShowCount";
import Button from "./Button";

function CoustomApp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const incrementByFive = () => {
    setCount2((prevCount) => prevCount + 5);
  };

  return (
    <>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </>
  );
}

export default CoustomApp;
