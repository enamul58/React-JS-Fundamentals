import React from "react";

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    setInterval(() => {
      this.colckTime = setInterval(() => this.tric(), 1000);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.colckTime);
  }

  tric() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

export default Clock;
