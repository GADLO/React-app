import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.makeTimer()
  }

  makeTimer(){
      setInterval(() => {
          let rand = Math.floor(Math.random()*this.props.maxNum)
          this.setState({num:rand})
      },1000)
  }

  render() {
    return (
      <div>
        <h1>Random Component</h1>
        <h2>{this.state.num}</h2>
      </div>
    );
  }
}

export default Random;
