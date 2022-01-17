import React, { Component } from "react";

class ScoreKeep extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }
  singleKill() {
    this.setState({ score: this.state.score + 1 });
    this.setState({ score: this.state.score + 1 });
    this.setState({ score: this.state.score + 1 });
    this.setState({ score: this.state.score + 1 });
  }

  tripleKill() {
    this.setState((st) => {
      return { score: st.score + 1 };
    });
    this.setState((st) => {
      return { score: st.score + 1 };
    });
    this.setState((st) => {
      return { score: st.score + 1 };
    });
  }
  render() {
    return (
      <div>
        <h1>ScoreKeep Component</h1>
        <h2>Score is : {this.state.score}</h2>
        <button onClick={this.singleKill}>First Kill</button>
        <button onClick={this.tripleKill}>Triple Kill</button>
      </div>
    );
  }
}

export default ScoreKeep;
