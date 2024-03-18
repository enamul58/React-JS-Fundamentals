import React, { Component } from "react";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      count: 1,
    };
  }

  changeName() {
    this.setState({
      name: "enamullimon",
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        <input type="button" value="click" onClick={() => this.changeName()} />
      </div>
    );
  }
}
