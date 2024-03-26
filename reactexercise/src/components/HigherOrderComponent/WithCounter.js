import React from "react";

const withCounter = (ClickCountComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    onIncrement = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return (
        <ClickCountComponent count={count} onIncrement={this.onIncrement} />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
