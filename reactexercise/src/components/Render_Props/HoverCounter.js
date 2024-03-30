import React from "react";

export default function HoverCount({ count, onIncrement }) {
  return <h1 onMouseOver={onIncrement}>Hover {count} item</h1>;
}
