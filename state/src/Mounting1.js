import React, { Component } from "react";

export default class Mounting1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "enamul",
    };
    console.log("Mounting 1 constructor invoke");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Mounting 1 getDeriveStateFromProps");
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    console.log("Mounting 1 component did mount");
  }

  render() {
    console.log("Mounting 1 render invoke");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
}
