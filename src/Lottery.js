import React, { Component } from "react";
import "./Ball.css";

import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 7,
    maxNum: 90
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };

    this.handleClick = this.handleClick.bind(this);
  }

  generateRandom() {
    this.setState(st => ({
      nums: st.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }));
  }
  handleClick() {
    this.generateRandom();
  }

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        {this.state.nums.map(n => (
          <Ball num={n} />
        ))}

        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
