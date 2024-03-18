import React, { Component } from "react";

class Card2 extends Component {
  render() {
    return (
      <>
        <h3>{this.props.name}</h3>
        <h3>{this.props.subject}</h3>
      </>
    );
  }
}

export default Card2;
