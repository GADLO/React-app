import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    changeLightStartsOn: 0.25,
  };
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }

  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.changeLightStartsOn);
      }

      board.push(row);
    }
    return board;
  }

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(y, x-1);
    // flipCell(y, x+1);
    // flipCell(y-1, x);
    // flipCell(y+1, x);
    flipCell(y, x);

    let hasWon = board.every((row) => row.every((cell) => !cell));
    console.log(hasWon);
    this.setState({ board: board, hasWon: hasWon });
  }

  won() {
    return this.state.hasWon ? "won neon-green" : "lose";
  }

  render() {
    let tbBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell 
          key={`${y}-${x}`}
            isLit={this.state.board[y][x]}
            flipCellsAround={() => this.flipCellsAround(coord)}
          />
        );
      }
      tbBoard.push(<tr key={y}>{row}</tr>);
    }
   
    return (
      <div>
        <h1 className={this.won()}>Win</h1>
        <h1 className="neon">F u n  G a m e</h1>
        <table className="Board">
          <tbody>{tbBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
