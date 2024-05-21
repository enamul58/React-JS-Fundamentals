import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function Counter2() {
  const [count, Action] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count: {count}</div>
      <button type="button" onClick={() => Action("increment")}>
        increment
      </button>
      <button type="button" onClick={() => Action("decrement")}>
        decrement
      </button>
    </div>
  );
}
