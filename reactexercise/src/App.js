import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Count from "./components/countapp/Count";
// import Conditional_Rendering from "./components/Conditional_Rendering/index";
import Event_Handler_Class from "./components/Event_Handler_Class/index";
import CountWithOutHook from "./components/HOOK_USESTATE/CountWithOutHook";
import CountWithHook from "./components/HOOK_USESTATE/CountWithHook";
import CounterApp from "./components/Assigment_2_Counter_App/CounterApp";
import Clock from "./components/Clock/Clock";
import ClockTwo from "./components/Clock_2/ClockTwo";

function App() {
  return (
    <>
      {/* <Card style={{ width: "20rem", margin: "20px" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            sint!
          </Card.Text>
          <Button>Learn More</Button>
        </Card.Body>
      </Card>
      <Count /> */}

      {/* <Conditional_Rendering></Conditional_Rendering> */}
      {/* <Event_Handler_Class /> */}
      {/* <CountWithOutHook></CountWithOutHook>
      <CountWithHook></CountWithHook> */}
      {/* <Clock local="bn-BD"></Clock> */}
      <ClockTwo></ClockTwo>
    </>
  );
}

export default App;
