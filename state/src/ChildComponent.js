import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.callMethod("Adil", "Ansari")}>
          Click
        </button>
      </div>
    );
  }
}
