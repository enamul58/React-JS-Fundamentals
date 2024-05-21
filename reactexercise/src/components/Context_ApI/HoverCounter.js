import React from "react";

export default function HoverCount({ count, onIncrement, theme, switchTheme }) {
  const style =
    theme === "dark"
      ? { backgroundColor: "yellow", color: "#000" }
      : { backgroundColor: "#000", color: "#fff" };
  return (
    <>
      <h1 onMouseOver={onIncrement} style={style}>
        Hover {count} item
      </h1>
      <button onClick={switchTheme}>Click</button>
    </>
  );
}
