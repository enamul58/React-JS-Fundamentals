import Clock from "../Clock/Clock";
import React from "./ClockList";

export default function ClockList({ ary = [] }) {
  return (
    <>
      <div>
        {ary.map((key) => (
          <Clock key={key} />
        ))}
      </div>
    </>
  );
}
