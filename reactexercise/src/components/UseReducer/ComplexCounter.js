import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, counter: state.counter + action.value };
    case "increment2":
      return { ...state, counter: state.counter + action.value };
    case "decrement1":
      return { ...state, counter: state.counter - action.value };
    case "decrement2":
      return { ...state, counter: state.counter - action.value };
    default:
      return state;
  }
};

export default function Counter3() {
  const [count, Action] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count: {count.counter}</div>

      <button
        type="button"
        onClick={() =>
          Action({
            type: "increment1",
            value: 1,
          })
        }
      >
        increment 1
      </button>

      <button
        type="button"
        onClick={() =>
          Action({
            type: "increment2",
            value: 5,
          })
        }
      >
        increment 5
      </button>

      <div>count: {count.counter2}</div>

      <button
        type="button"
        onClick={() =>
          Action({
            type: "decrement1",
            value: 1,
          })
        }
      >
        decrement 1
      </button>

      <button
        type="button"
        onClick={() =>
          Action({
            type: "decrement2",
            value: 5,
          })
        }
      >
        decrement 5
      </button>
    </div>
  );
}
