import React, { useState } from "react";
import classes from "./BGCSS.module.css";

export default function BGColor() {
  const [bg, setBg] = useState("red");
  const [text, setText] = useState("single Click");

  const changeBackgroundColor = () => {
    setBg("green");
    setText("Double click");
  };

  const DoubleClickColorChange = () => {
    setText("single click");
    setBg("red");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }} className={classes.box}>
        <button
          type="button"
          onClick={changeBackgroundColor}
          onDoubleClick={DoubleClickColorChange}
        >
          {text}
        </button>
      </div>
    </>
  );
}
