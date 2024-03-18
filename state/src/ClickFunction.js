import React, { Component } from "react";
import "./ClickFunction.css";

export default class ClickFunction extends Component {
  render() {
    const HelloFunction = (name) => {
      alert("hello " + name);
    };

    return (
      <div className="center">
        <input
          type="button"
          value="Click"
          onClick={() => HelloFunction("md.enamul haque sarker")}
        />
      </div>
    );
  }
}

// import React from "react";
// import "./ClickFunction.css";

// function ClickFunction() {
//   function HelloFunction() {
//     alert("Hey bro");
//   }

//   return (
//     <div className="center">
//       <input type="button" value="Click" onClick={HelloFunction} />
//     </div>
//   );
// }

// export default ClickFunction;
