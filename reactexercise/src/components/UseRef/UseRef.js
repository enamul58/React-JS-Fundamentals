import { useState, useEffect, useRef } from "react";

export default function UseRef() {
  const [date, setDate] = useState(new Date());
  const puse = useRef();

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    puse.current = setInterval(tick, 1000);
    return () => {
      clearInterval(puse.current);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button type="button" onClick={() => clearInterval(puse.current)}>
        Puse
      </button>
    </div>
  );
}
