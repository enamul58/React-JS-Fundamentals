import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./ThemeContext";

export default function Content() {
  return (
    <>
      <h1>This is a content</h1>
      <Counter>
        {(counter, increment) => {
          return (
            <ThemeContext.Consumer>
              {({ theme, switchTheme }) => (
                <HoverCounter
                  count={counter}
                  onIncrement={increment}
                  switchTheme={switchTheme}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </>
  );
}
