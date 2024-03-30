import React from "react";

export default function ClickCount({ count, onIncrement }) {
  return (
    <button type="button" onClick={onIncrement}>
      click {count} item
    </button>
  );
}
