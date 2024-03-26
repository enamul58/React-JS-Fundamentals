import React from "react";

export default class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  onIncrement = () => {
    this.setState((pastCount) => ({ count: pastCount.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <button type="button" onClick={this.onIncrement}>
          Click {count} time
        </button>
        <h1 onMouseOver={this.onIncrement}>Hovered {count} time</h1>
      </>
    );
  }
}
