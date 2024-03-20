import React, { Component } from "react";
import Button from "./Button";

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

  handelEvent = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    let button;
    if (locale === "bn-BD") {
      button = (
        <Button change={this.handelEvent} locale="en-US">
          click here
        </Button>
      );
    } else {
      button = (
        <Button change={this.handelEvent} locale="bn-BD">
          click here
        </Button>
      );
    }
    return (
      <>
        <span>{date.toLocaleTimeString(locale)}</span>
        {/* <button onClick={this.handelEvent}>Click</button> */}
        {button}
      </>
    );
  }
}

export default ClockTwo;
