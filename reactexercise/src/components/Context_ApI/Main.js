import React from "react";
import Counter from "./Counter";
import ClickCount from "./ClickCounter";
import Section from "./Section";
import ThemeContext from "./ThemeContext";

export default class Main extends React.Component {
  state = {
    theme: "dark",
  };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === "dark") {
        return {
          theme: "yellow",
        };
      } else {
        return {
          theme: "dark",
        };
      }
    });
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
        <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
          <Section></Section>
        </ThemeContext.Provider>
      </>
    );
  }
}
