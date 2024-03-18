import React from "react";
import SlotM from "./SlotM";

function App() {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to <span style={{ color: "#111" }}>Slot machine game</span>🎰
      </h1>
      <div className="sloatMachine">
        <SlotM x="😄" y="😄" z="😄" />
        <SlotM x="😄" y="😄" z="🎅" />
        <SlotM x="🍎" y="🥭" z="🍎" />
      </div>
    </>
  );
}

export default App;
