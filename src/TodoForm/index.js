import React from "react";
import { TodoContext } from "./../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    };
    const onCancel = ()=>{
        setOpenModal(false);
    };
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(

        <form onSubmit={onSubmit}>
            <label>Agrega una nueva ToDo</label>
            <textarea placeholder="Cortar la cebolla para el almuerzo"
            value = {newTodoValue}
            onChange={onChange}/>
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Añadir</button>
            </div>
        </form>
    )
}
export {TodoForm};