import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() ,completed:false});
    this.setState({ task: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task" className="todo-label">新增</label>
        <input
          type="text"
          placeholder="新计划"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
          className="todo-input"
        ></input>
        <button className="todo-btn">提交</button>
      </form>
    );
  }
}

export default NewTodoForm;
