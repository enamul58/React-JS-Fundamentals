import React, { useState } from "react";
import "./index.css";

function App() {
  const [time, setCtime] = useState(new Date().toLocaleTimeString());

  const currentTime = () => {
    setCtime(new Date().toLocaleTimeString());
  };

  const [digitalTime, currentDigitalTime] = useState(
    new Date().toLocaleDateString()
  );
  setInterval(() => {
    currentDigitalTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
      <div className="center">
        <h1>{time}</h1>
        <button onClick={currentTime}>current Time</button>
        <h1>Digital Time</h1>
        <h2>{digitalTime}</h2>
      </div>
    </>
  );
}

export default App;
