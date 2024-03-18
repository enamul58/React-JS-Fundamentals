import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    desc: "todo1 description 1",
  },

  {
    id: uuidv4(),
    title: "todo2",
    desc: "todo2 description 2",
  },

  {
    id: uuidv4(),
    title: "todo3",
    desc: "todo3 description 3",
  },
];

const List = () => {
  console.log(uuidv4());
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
