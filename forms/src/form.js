import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ username: evt.target.value });
    
  }

  handleSubmit(evt){
      alert(`你输入了:${this.state.username}`)
    this.setState({username:''})
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit} t>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          <button> 提交</button>
        </form>
      </div>
    );
  }
}

export default Form;
