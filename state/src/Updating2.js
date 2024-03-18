import React, { Component } from "react";

export default class Updating2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name2: this.props.name,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.state.name2}
      </div>
    );
  }
}
