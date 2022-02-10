import React, { Children } from "react";
import './TodoItem.css';
function TodoItem(props){
    return(
        <li className={`TodoItem ${props.completed && 'checked'}`}>
            <label className="checkboxContainer">
                <input type="checkbox"/>
                <span className="checkmark" onClick={props.onComplete}></span>
            </label>
            <p className="TodoItemText">
                {props.text}
                <span className="TodoItemDel" onClick={props.onDelete}>X</span>
            </p>
          
        </li>
    )
}

export {TodoItem};