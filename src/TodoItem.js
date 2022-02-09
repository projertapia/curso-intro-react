import React, { Children } from "react";
import './TodoItem.css'
function TodoItem(props){
    let classTodoItem = 'TodoItem ' + props.completed;
    let checkboxChecked;
    if(props.completed == 'true'){
        checkboxChecked = "checked";
    }else{
        checkboxChecked = "";
    }
    return(
        <li className={classTodoItem}>            
            <label className="checkboxContainer">
                <input type="checkbox" checkboxChecked/>
                <span className="checkmark"></span>
            </label>
            <p className="TodoItemText">
                {props.text}
                <span className="TodoItemDel"><p>X</p></span>
            </p>
            
        </li>
    )
}

export {TodoItem};