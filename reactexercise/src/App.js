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
import ClockList from "./components/Clock_2/ClockList";
import Form from "./components/Form/Form";
import Calculator from "./components/TemperatureCalculator/Calculator";
import TempCoveter from "./components/TemperatureCalculator_02/Calculator";
import Emoji from "./components/Composition/Emoji";
import { Text } from "./components/Composition/Text";
import Bracket from "./components/Composition/Bracket";
// import ClickCounter from "./components/ClickCount/ClickCounter";
import ClickCounter from "./components/HigherOrderComponent/ClickCounter";
import HoverCounter from "./components/HigherOrderComponent/HoverCounter";

function App() {
  // const ary = [1, 2, 3];
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
      {/* <ClockTwo></ClockTwo> */}
      {/* <ClockList ary={ary}></ClockList> */}
      {/* <Form></Form> */}
      {/* <Calculator /> */}
      {/* <TempCoveter /> */}
      {/* <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji> */}
      <ClickCounter />
      <HoverCounter />
    </>
  );
}

export default App;
