import React from "react";

class Button extends React.Component {
  render() {
    const { change, locale } = this.props;
    return <button onClick={() => change(locale)}>Click</button>;
  }
}

export default Button;
