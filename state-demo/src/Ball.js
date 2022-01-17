import React, { Component } from "react";

import './Ball.css'

class Ball extends Component {
    static defaultProps ={
        
    }
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
     
        <div className="ball">{this.props.num}</div>
      
    );
  }
}

export default Ball;
