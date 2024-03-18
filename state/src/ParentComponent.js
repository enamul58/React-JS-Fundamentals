import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  parentMethod = (firstName, lastName) => {
    alert("Hello " + firstName + " " + lastName);
  };

  render() {
    return (
      <div>
        <ChildComponent callMethod={this.parentMethod} />
      </div>
    );
  }
}
