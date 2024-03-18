import React from "react";

function SlotM(props) {
  let { x, y, z } = props;

  if (x === y && x === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is matching</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is not matching</h1>
        </div>
      </>
    );
  }
}

export default SlotM;
