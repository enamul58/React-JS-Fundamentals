import React from "react";
import Counter from "./Counter";
import ClickCount from "./ClickCounter";
import Section from "./Section";

export default class Main extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <>
        <Counter>
          {(counter, increment) => (
            <ClickCount count={counter} onIncrement={increment} />
          )}
        </Counter>
        <Section theme={theme}></Section>
      </>
    );
  }
}
