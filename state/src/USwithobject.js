import React from "react";
import { useState } from "react";

function USwithobject() {
  const obj = {
    name: "Md.Enamul Haque Sarker",
    age: 31,
    height: 5.8,
    isYoung: true,
  };
  const [person, setPerson] = useState(obj);
  let ChangeName = () => {
    setPerson((previousState) => {
      return {
        ...previousState,
        name: "limon",
      };
    });
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={ChangeName}>Name Change</button>
    </div>
  );
}

export default USwithobject;
