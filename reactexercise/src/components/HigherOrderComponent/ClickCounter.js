import withCounter from "./WithCounter";

const ClickCounter = (props) => {
  const { count, onIncrement } = props;
  return (
    <button type="button" onClick={onIncrement}>
      count {count} time
    </button>
  );
};

export default withCounter(ClickCounter);
