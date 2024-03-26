import withCounter from "./WithCounter";

const HoverCounter = (props) => {
  const { count, onIncrement } = props;
  return <h1 onMouseOver={onIncrement}>count {count} time</h1>;
};

export default withCounter(HoverCounter);
