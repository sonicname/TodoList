import React, { Component } from 'react';
import Todolist from './components/Todolist';
import './App.css';
import addImg from './assents/img/add.svg';

class App extends Component {
  constructor(){
    super();
    this.state = [
      {todo: "Learn JS", isComplete: false},
      {todo: "Learn Html", isComplete: false},
      {todo: "Learn Css", isComplete: false},
      {todo: "Learn React", isComplete: false}
    ]
  }
  render(){
    return (
      <div className="container">
        <div className="navbar">
          <h1>Todolist</h1>
        </div>
        <div className="main-content">
          <div className="add-item">
            <img src={addImg} width="64" height="64"></img>
            <input type="text" placeholder="Nhập............."></input>
          </div>
          <div className="todo">
          {
            this.state.map(item => <Todolist item={item}/>)
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
