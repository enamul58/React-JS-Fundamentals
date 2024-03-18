import React, { Component } from "react";

export default class EventHanding extends Component {
  constructor() {
    super();
    this.state = {
      name: "enamul",
    };
  }

  HandlerEvent() {
    this.setState({
      name: "limon",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button type="button" onClick={() => this.HandlerEvent()}>
          Value
        </button>
      </div>
    );
  }
}
