import React, { Component } from "react";
import Updating2 from "./Updating2";
export default class updating1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "Limon",
    };
  }

  render() {
    return (
      <div>
        <Updating2 name={this.state.name1}></Updating2>
      </div>
    );
  }
}
