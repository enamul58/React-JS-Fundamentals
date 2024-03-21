import React from "react";

export default class Form extends React.Component {
  state = {
    title: "javascript",
    text: "javascript is awesome",
    library: "react",
    isAwesome: true,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({ title: e.target.value });
    } else if (e.target.type === "textarea") {
      this.setState({ text: e.target.value });
    } else if (e.target.type === "select-on") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("nothing here");
    }
  };

  submitHandler = (e) => {
    const { title, text, library, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, text, library, isAwesome);
  };

  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler} style={{ padding: 10 }}>
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
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={isAwesome}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
