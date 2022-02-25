import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({isEditing:false})
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleToggle(eyt){
    this.props.toggleTodo(this.props.id)
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form className="todo-edit" onSubmit={this.handleUpdate}>
            <input 
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            ></input>
            <button onClick={this.handleUpdate}>保存</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todo-list">
          <li className={this.props.completed ? "completed" : ""}  onClick={this.handleToggle}>{this.props.task}</li>
          <button onClick={this.toggleForm} className="col-2">编辑</button>
          <button onClick={this.handleRemove} className="col-2">X</button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
