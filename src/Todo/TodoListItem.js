import React, { Component } from 'react';
import styles from './TodoList.module.css';

export class TodoListItem extends Component {
  state = {
    isEditing: false,
    editInputValue: this.props.todo.name,
  };

  // componentDidMount() {
  //   console.log('Mounting', this.props.todo.name);
  // }

  // componentWillUnmount() {
  //   console.log('Unmounting', this.props.todo.name);
  // }

  // componentDidUpdate() {
  //   console.log('Updating', this.props.todo.name);
  // }

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  cancelEdit = () => {
    this.setState({ isEditing: false, editInputValue: this.props.todo.name });
  };

  submitEdit = () => {
    this.props.editTodo(this.state.editInputValue);
    this.setState({
      isEditing: false,
    });
  };

  render() {
    return (
      <li
        className={styles.todoListItem}
        style={{
          textDecoration: this.props.todo.done ? 'line-through' : 'none',
        }}>
        {this.state.isEditing ? (
          <>
            <input
              value={this.state.editInputValue}
              onChange={event => {
                this.setState({
                  editInputValue: event.target.value,
                });
              }}
            />
            <button onClick={this.cancelEdit}>Cancel</button>
            <button onClick={this.submitEdit}>Save</button>
          </>
        ) : (
          <>
            <span
              onClick={() => {
                this.props.toggleTodo();
              }}>
              {this.props.todo.name}
            </span>
            <button onClick={this.handleEdit}>Edit</button>
            <button
              onClick={() => {
                this.props.deleteTodo();
              }}>
              Delete
            </button>
          </>
        )}
      </li>
    );
  }
}

export default TodoListItem;