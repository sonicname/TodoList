import React, { Component } from 'react';
import Todolist from './components/Todolist';
import './App.css';
import addImg from './assents/img/add.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      TodoItem: [
        {todo: "Learn JS", isComplete: true},
        {todo: "Learn Html", isComplete: true},
        {todo: "Learn Css", isComplete: true},
        {todo: "Learn ReactJS", isComplete: false}
      ]
    }
    this.keyUp = this.keyUp.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  keyUp(event){
    if(event.keyCode === 13){
      let text = event.target.value;
      if(!text){
        return;
      }
      text = text.trim();
      if(!text){
        return;
      }
      this.setState({
        newItem: '',
        TodoItem: [
          ...this.state.TodoItem,
          {todo: text, isComplete: false}
        ]
      });
    }
  }

  onInput(event){
    this.setState({
      newItem: event.target.value
    });
  }

  render(){
    return (
      <div className="container">
        <div className="navbar">
          <h1>Todolist</h1>
        </div>
        <div className="main-content">
          <div className="add-item">
            <img alt="img" src={addImg} width="64" height="64"></img>
            <input type="text" value={this.state.newItem} onChange={this.onInput} onKeyUp={this.keyUp} placeholder="Nhập............."></input>
          </div>
          <div className="todo">
          {
            this.state.TodoItem.map((item, index) => <Todolist key={index} item={item}/>)
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
