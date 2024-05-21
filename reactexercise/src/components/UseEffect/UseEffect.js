import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  const addClick = () => {
    console.log("previous count");
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${count} time`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      {/* <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p> */}
      <p>
        <button type="button" onClick={addClick}>
          click
        </button>
      </p>
    </div>
  );
}
