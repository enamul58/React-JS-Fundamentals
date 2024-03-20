import React, { Component } from "react";

class ClockTwo extends Component {
  state = {
    date: new Date(),
    locale: "bn-BD",
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tric(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tric() {
    this.setState({
      date: new Date(),
    });
  }

  handelEvent = () => {
    this.setState({
      locale: "en-US",
    });
  };

  render() {
    const { date, locale } = this.state;
    return (
      <>
        <span>{date.toLocaleTimeString(locale)}</span>
        <button onClick={this.handelEvent}>Click</button>
      </>
    );
  }
}

export default ClockTwo;
