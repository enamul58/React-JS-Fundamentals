import React from "react";

class Button extends React.Component {
  render() {
    const { change, locale } = this.props;
    return (
      <button onClick={() => change(locale)}>
        {locale === "bn-BD" ? "ঘড়ি পরিবর্তন করুন" : "change the clock"}
      </button>
    );
  }
}

export default Button;
