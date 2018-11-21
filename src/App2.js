import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Input from './Input'
import Todo from './Todo'
class App extends Component {
  state = {
    show: true
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => {
            this.setState({show: !this.state.show})
          }}>Show</button>
          {
            this.state.show ? <Counter userName="Undo"></Counter> : null
          }
          <Input defaultVal="Undo"></Input>
          <Todo></Todo>
        </header>
      </div>
    );
  }
}

export default App;
