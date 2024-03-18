import React, { Component } from "react";

export default class CountWithOutHook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.handleCount}>state</button>
      </div>
    );
  }
}
