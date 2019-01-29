import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = "";
    if (count > 0) {
      polarity = "positive";
    } else if (count < 0) {
      polarity = "negative";
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ["count", this.state.polarity].join(" ");
    return (
      <section className="counter">
        <a href="#" className="down clicker" onClick={this.handleDown}>
          <svg
            style={{ fill: "green" }}
            width="1792"
            height="1792"
            viewBox="0 0 1792 1792"
          >
            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
          </svg>
        </a>
        <span className={classes}>{this.state.count}</span>
        <a href="#" className="up clicker" onClick={this.handleUp}>
          <svg
            style={{ fill: "red" }}
            width="1792"
            height="1792"
            viewBox="0 0 1792 1792"
          >
            <path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z" />
          </svg>
        </a>
      </section>
    );
  }
}

export default Counter;
