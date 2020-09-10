import React, { Component } from 'react';
import './Todolist.css';
import unCheckImg from '../assents/img/circle.svg';
import checkImg from '../assents/img/right.svg';
import trashBin from '../assents/img/trash.svg';

export default class Todolist extends Component {
    render() {
        let urlImg = unCheckImg;
        if(this.props.item.isComplete == true){
            urlImg = checkImg;
        }
        return (
            <div className="TodoList">
                <div className="TodoItem">
                    <img width="40" height="40" src={urlImg}></img>
                    <h3>{this.props.item.todo}</h3>
                </div>
            </div>
        )
    }
}
