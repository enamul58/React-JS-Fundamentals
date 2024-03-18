import React, { Component } from "react";
import HomePage from "./HomePage";
import LoggInPage from "./LogInPage";

class Conditional_Rendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggIn: false,
    };
  }
  render() {
    if (this.state.isLoggIn) {
      return <HomePage></HomePage>;
    } else {
      return <LoggInPage></LoggInPage>;
    }
  }
}

export default Conditional_Rendering;
