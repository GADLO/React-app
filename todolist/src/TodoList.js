import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.updated = this.updated.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  updated(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
          console.log({...todo})
        return {
          ...todo,
          task: updatedTask,
        };
      }
      return todo;
    });
    console.log(updatedTodos)
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id){
    const updatedTodos = this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed:!todo.completed,
          };
        }
        return todo;
      });
      this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.updated}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="todo">
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create}  />
        <h1 className="center">Todo List!</h1>
        <p >@Darren React</p>
      </div>
    );
  }
}

export default TodoList;
