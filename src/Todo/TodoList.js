import React, { Component } from 'react';
import styles from './TodoList.module.css';
import { TodoListItem } from './TodoListItem';

export class TodoList extends Component {
  id = 0;
  state = {
    filter: 'ALL',
    addTodoValue: '',
    todos: [
      {
        id: this.id++,
        name: 'Buy milk',
        done: false,
      },
      {
        id: this.id++,
        name: 'Buy Bread',
        done: true,
      },
      {
        id: this.id++,
        name: 'Go to gym',
        done: false,
      },
    ],
  };

  getTodoName = () => {
    return prompt('Enter todo name');
  };

  setFilter = filterName => {
    this.setState({
      filter: filterName,
    });
  };

  addTodo = todoName => {
    if (todoName) {
      this.setState(prevState => {
        return {
          todos: [
            ...prevState.todos,
            {
              id: this.id++,
              name: todoName,
              done: false,
            },
          ],
        };
      });
    }
  };

  deleteTodo = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter((todo, index) => {
          return id !== todo.id;
        }),
      };
    });
  };

  // deleteTodo = indexToDelete => {
  //   this.setState(prevState => {
  // return {
  //   todos: prevState.todos.filter((todo, index) => {
  //     return index !== indexToDelete;
  //   }),
  // };
  // return {
  //   todos: [
  //     ...prevState.todos.slice(0, indexToDelete),
  //     ...prevState.todos.slice(indexToDelete + 1),
  //   ],
  // };
  //   });
  // };

  toggleTodo = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map((todo, index) => {
          if (id === todo.id) {
            return {
              ...todo,
              done: !todo.done,
            };
          } else return todo;
        }),
      };
    });
  };

  editTodo = (id, newName) => {
    if (newName)
      this.setState(prevState => {
        return {
          todos: prevState.todos.map((todo, index) => {
            if (id === todo.id) {
              return {
                ...todo,
                name: newName,
              };
            } else return todo;
          }),
        };
      });
  };

  // toggleTodo = indexToChange => {
  //   this.setState(prevState => {
  //     return {
  //       todos: prevState.todos.map((todo, index) => {
  //         if (index === indexToChange) {
  //           return {
  //             ...todo,
  //             done: !todo.done,
  //           };
  //         } else return todo;
  //       }),
  //     };
  // return {
  //   todos: [
  //     ...prevState.todos.slice(0, indexToChange),
  //     {
  //       ...prevState.todos[indexToChange],
  //       done: !prevState.todos[indexToChange].done,
  //     },
  //     ...prevState.todos.slice(indexToChange + 1),
  //   ],
  // };
  //   });
  // };

  getTodos = () => {
    switch (this.state.filter) {
      case 'ALL':
        return this.state.todos;
      case 'DONE':
        return this.state.todos.filter(todo => todo.done);
      case 'UNDONE':
        return this.state.todos.filter(todo => !todo.done);
    }
  };

  render() {
    return (
      <>
        <div>
          <ul className={styles.todoList}>
            {this.getTodos().map((todo, index) => {
              return (
                <TodoListItem
                  key={todo.id}
                  toggleTodo={() => this.toggleTodo(todo.id)}
                  deleteTodo={() => this.deleteTodo(todo.id)}
                  editTodo={newTodoName => this.editTodo(todo.id, newTodoName)}
                  todo={todo}
                />
              );
            })}
          </ul>
          <input
            type="text"
            value={this.state.addTodoValue}
            onChange={event => {
              this.setState({
                addTodoValue: event.target.value,
              });
            }}
          />
          <button
            onClick={() => {
              this.addTodo(this.state.addTodoValue);
              this.setState({
                addTodoValue: '',
              });
            }}>
            Add todo
          </button>
          <div>
            <h3>Filters</h3>
            <button onClick={() => this.setFilter('ALL')}>All</button>
            <button onClick={() => this.setFilter('DONE')}>Done</button>
            <button onClick={() => this.setFilter('UNDONE')}>Un-Done</button>
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;