import React, { Component } from "react";

export default class ChildClass extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.call("Md.Enamul Haque Sarker", "enamul")}
        >
          Click
        </button>
      </div>
    );
  }
}
