import React, { Component } from "react";

class Event_Handler_Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  handelOnChange = (e) => {
    this.setState({
      changedValue: e.target.value,
    });
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.handelClick}>Click</button> */}
        <input type="text" onChange={this.handelOnChange} />
        <p>{this.state.changedValue}</p>
      </div>
    );
  }
}

export default Event_Handler_Class;
