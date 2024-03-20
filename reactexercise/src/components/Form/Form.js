import React from "react";

export default class Form extends React.Component {
  state = {
    title: "javascript",
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({ title: e.target.value });
    } else if (e.target.type === "textarea") {
      this.setState({ title: e.target.value });
    } else {
      console.log("nothing here");
    }
  };

  render() {
    const { title, text } = this.state;
    return (
      <div>
        <form style={{ padding: 10 }}>
          <input
            type="text"
            placeholder="Enter language name"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            name=""
            value={text}
            onChange={this.handleChange}
          ></textarea>
        </form>
      </div>
    );
  }
}
