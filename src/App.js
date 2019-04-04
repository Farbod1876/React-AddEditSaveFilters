import React, { Component } from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Test from './Test';

class App extends Component {
  state = {
    toggled: false,
  };
  render() {
    return (
      <div className="App">
        <TodoList />
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;