import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setwarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const warningShow = inputValue.includes(".js")
      ? "You need javascript skill to complete the task"
      : null;
    setTodo(inputValue);
    setwarning(warningShow);
  };

  return (
    <div>
      <p> {todo} </p>
      <p>
        <textarea
          name="todo"
          id=""
          cols="30"
          rows="10"
          value={todo}
          onChange={handleInput}
        ></textarea>
      </p>
      <hr />
      <h2>{warning || "Good Choice"}</h2>
    </div>
  );
}
