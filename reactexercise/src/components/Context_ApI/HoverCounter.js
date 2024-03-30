import React from "react";

export default function HoverCount({ count, onIncrement, theme }) {
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#fff" } : null;
  return (
    <h1 onMouseOver={onIncrement} style={style}>
      Hover {count} item
    </h1>
  );
}
