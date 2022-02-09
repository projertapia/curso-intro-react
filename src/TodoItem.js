import React, { Children } from "react";
import './TodoItem.css'
function TodoItem(props){
    const onComplete = ()=>{
        alert('Ya completaste el todo: ' + props.text);
    };
    const onDelete = () => {
        alert('Borraste el todo: ' + props.text);
    }
    return(
        <li className={`TodoItem ${props.completed && 'checked'}`}>
            <label className="checkboxContainer">
                <input type="checkbox"/>
                <span className="checkmark" onClick={onComplete}></span>
            </label>
            <p className="TodoItemText">
                {props.text}
                <span className="TodoItemDel" onClick={onDelete}>X</span>
            </p>
          
        </li>
    )
}

export {TodoItem};