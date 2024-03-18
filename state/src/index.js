import React from "react";
import ReactDOM from "react-dom/client";
import ClickFunction from "./ClickFunction";
import EventHanding from "./EventHanding";
import Mounting1 from "./Mounting1";
import ParentClass from "./ParentClass";
import App from "./App";
import StyleComponent from "./StyleComponent";
import Updating1 from "./Updating1";
import ParentComponent from "./ParentComponent";
import USwithobject from "./USwithobject";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ClickFunction /> */}
    {/* <EventHanding></EventHanding> */}
    {/* <Mounting1 city="Bogura"></Mounting1> */}
    {/* <ParentClass /> */}
    {/* <App></App> */}
    {/* <StyleComponent></StyleComponent> */}
    {/* <Updating1></Updating1> */}
    {/* <ParentComponent /> */}
    <USwithobject />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
