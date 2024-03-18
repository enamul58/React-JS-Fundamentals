import React, { Component } from "react";

export default class StyleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }
  changeBackgroundColor = () => {
    this.setState({
      active: true,
    });
  };
  render() {
    let obj = {
      color: "green",
      backgroundColor: "yellow",
    };

    let obj2 = {
      fontSize: "40px",
      fontFamily: "cooper",
      textAlign: "center",
      backgroundColor: "orange",
    };
    if (this.state.active) {
      obj2.backgroundColor = "yellow";
    }
    return (
      <div>
        {/* <h1 style={{ color: "red", backgroundColor: "blue" }}>
          learning never end
        </h1> */}
        {/* <h1 style={obj}>learning never end</h1> */}
        {/* <h1 style={{ ...obj, ...obj2 }}>learning never end</h1> */}
        <button style={obj2} onClick={this.changeBackgroundColor}>
          click
        </button>
      </div>
    );
  }
}
