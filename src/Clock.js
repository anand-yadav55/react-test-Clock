import React, { Component } from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        Hi, the time right now is {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
