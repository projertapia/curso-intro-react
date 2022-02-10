import React from "react";
import './TodoCounter.css';

function TodoCounter({total,completed}){
    const promedioTodos = Math.round((completed/total)*100);
    return(
        <React.Fragment>
            <h2 className="TodoCounter">Mi lista <br/> de Tareas</h2>
            <span className="TodoCounterIndicator">
                <span className="TodoCounterLevel" style={{width:promedioTodos+'%'}}></span>
                <p className="TodoCounterText">{promedioTodos}%</p>
            </span>
            <p className="TodoCounterleyenda">{completed} de {total}</p>
        </React.Fragment>
    )
}

export {TodoCounter};