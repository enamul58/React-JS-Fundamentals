import React from "react";

export default function ClickCount({ count, onIncrement }) {
  return (
    <>
      {onIncrement}
      <button type="button" onClick={onIncrement}>
        click {count} item
      </button>
    </>
  );
}
