import React, { Component } from "react";
import ChildClass from "./ChildClass";

export default class ParentClass extends Component {
  parentMethod = (fullName, nickName) => {
    alert(`What is your name ${fullName} Nick Name: ${nickName}`);
  };

  render() {
    return (
      <div>
        <ChildClass call={this.parentMethod} />
      </div>
    );
  }
}
