import React from 'react';
import './Todo.css';
export default function Todo(props) {
    return (
        <div onClick={()=>props.toggleItem(props.tododata.id)}
        className={props.tododata.completed?'cross':''}>
            {props.tododata.name}
        </div>
    )
}
