import React, { Component } from 'react';
import './Todolist.css';
import unCheckImg from '../assents/img/circle.svg';
import checkImg from '../assents/img/right.svg';
import trashBin from '../assents/img/trash.svg';

export default class Todolist extends Component {
    render() {
        let urlImg = unCheckImg;
        let checkText = "complete";
        if(this.props.item.isComplete === true){
            urlImg = checkImg;
            checkText = "check";
        }
        return (
            <div className="TodoList">
                <img onClick={this.props.onClick} alt="img" id="checkBox" width="38" height="38" src={urlImg} ></img>
                <p className={checkText}>{this.props.item.todo}</p>
                <img alt="img" id="trashBin" src={trashBin} width="38" height="38"></img>
            </div>
        )
    }
}
