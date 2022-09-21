import react from "react";
import React from "react";
import { TodoContext } from "./../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos,completedTodos} = React.useContext(TodoContext);
    const promedioTodos = Math.round((completedTodos/totalTodos)*100);
    return(
        <React.Fragment>
            <h2 className="TodoCounter">Mi lista <br/> de Tareas</h2>
            <span className="TodoCounterIndicator">
                <span className="TodoCounterLevel" style={{width:promedioTodos+'%'}}></span>
                <p className="TodoCounterText">{promedioTodos}%</p>
            </span>
            <p className="TodoCounterleyenda">{completedTodos} de {totalTodos}</p>
        </React.Fragment>
    )
}

export {TodoCounter};