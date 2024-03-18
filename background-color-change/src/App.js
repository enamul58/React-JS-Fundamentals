import React, { useState } from "react";

function App() {
  let [bg, setBg] = useState("purple");
  let [name, setName] = useState("Click Me");

  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("OUCH!!!🐺");
  };

  const bgBack = () => {
    setBg("purple");
    setName("Lucky!!!");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
}

export default App;
