import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  onIncrement = () => {
    this.setState((countParameter) => ({
      count: countParameter.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { children } = this.props;
    return children(count, this.onIncrement);
  }
}
