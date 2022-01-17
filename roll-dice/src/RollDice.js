import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { dice1: "one", dice2: "two", dice3: "three", rolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const ranDice1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const ranDice2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const ranDice3 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({
      rolling: true,
    });

    //等待一秒钟，设置rolling为false
    setTimeout(
      () =>
        this.setState({
          dice1: ranDice1,
          dice2: ranDice2,
          dice3: ranDice3,
          rolling: false,
        }),
      1000
    );
  }
  render() {
    return (
      <div>
        <h1>Dice</h1>
        <div className="dices">
          <Dice face={this.state.dice1} rolling={this.state.rolling} />
          <Dice face={this.state.dice2} rolling={this.state.rolling} />
          <Dice face={this.state.dice3} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll}>
          {this.state.rolling ? "摇动中..." : "摇起来"}
        </button>
      </div>
    );
  }
}

export default RollDice;
