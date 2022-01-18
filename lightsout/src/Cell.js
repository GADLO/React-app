import isThisHour from "date-fns/isThisHour";
import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.flipCellsAround();
  }
  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");
    return <td className={classes} onClick={this.handleClick}></td>;
  }
}

export default Cell;
