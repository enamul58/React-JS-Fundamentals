import { useState } from "react";

export default function UseTodo() {
  const [work, setTodo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = work;

  return (
    <div>
      <p>{title}</p>
      <p>
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTodo({
              ...work,
              title: e.target.value,
            })
          }
        />
      </p>
      <p>
        <input
          type="text"
          vlaue={description}
          onChange={(e) =>
            setTodo({
              ...work,
              description: e.target.value,
            })
          }
        />
      </p>
    </div>
  );
}
