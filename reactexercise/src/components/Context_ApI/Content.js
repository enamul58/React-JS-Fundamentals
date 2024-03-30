import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content({ theme }) {
  return (
    <>
      <h1>This is a content</h1>
      <Counter>
        {(counter, increment) => (
          <HoverCounter count={counter} onIncrement={increment} theme={theme} />
        )}
      </Counter>
    </>
  );
}
