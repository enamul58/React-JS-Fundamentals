import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <h1>Allah Please help me</h1>
    <h3>Hellow my name is Enamul </h3>
    <p>Current Time {new Date().toLocaleTimeString()}</p>
    <p>
      Today Date is {new Date().getDate()}/{new Date().getMonth() + 1}/
      {new Date().getFullYear()}
    </p>
  </>,
  document.getElementById("root")
);
