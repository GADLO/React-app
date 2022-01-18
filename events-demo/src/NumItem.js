import React, { Component } from "react";

class NumItem extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }
  render() {
  
    return (
      <div>
        <li>{this.props.value}</li>
       <button onClick={this.props.remove}>X</button>
      </div>
    );
  }
}

export default NumItem;
