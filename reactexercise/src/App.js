// import React, { useState } from "react";
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
//import ClickCounter from "./components/HigherOrderComponent/ClickCounter";
//import HoverCounter from "./components/HigherOrderComponent/HoverCounter";
import ClickCount from "./components/Render_Props/ClickCounter";
import HoverCount from "./components/Render_Props/HoverCounter";
import Counter from "./components/Render_Props/Counter";
import Section from "./components/Context_ApI/Section";
import User from "./components/Props/User";
import Main from "./components/Context_ApI/Main";
import Todo from "./components/Todo/TodoApp";
import MyComponent from "./components/UseEffect/UseEffect";
import UseRef from "./components/UseRef/UseRef";
import Counter2 from "./components/UseReducer/UseReducer";
import Counter3 from "./components/UseReducer/ComplexCounter";
import UseTodo from "./components/UseState/useTodo";

function App() {
  // const ary = [1, 2, 3];
  // const [show, setShow] = useState(true);
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
      {/* <Counter>{}</Counter> */}
      {/* <User name={() => "Bangladesh"}></User> */}
      {/* <Counter>
        {(counter, onIncrement) => (
          <ClickCount count={counter} onIncrement={onIncrement} />
        )}
      </Counter>
      <Section></Section> */}
      {/* <Main></Main>
      <Todo /> */}
      {/* {show && <MyComponent />}
      <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
        {show ? "Hide Post" : "Show Post"}
      </button> */}
      {/* <UseRef /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      <UseTodo></UseTodo>
    </>
  );
}

export default App;
