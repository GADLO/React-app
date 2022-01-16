import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.makeRandom = (num) => {
      let rand = Math.floor(Math.random() * 10);
      this.setState({ num: rand });
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.makeRandom}>点击</button>
      </div>
    );
  }
}

export default Button;
