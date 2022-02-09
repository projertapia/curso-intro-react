import React from "react";
import './TodoCounter.css';

function TodoCounter(){
    return(
        <React.Fragment>
            <h2 className="TodoCounter">Mi lista <br/> de Tareas</h2>
            <span className="TodoCounterIndicator">
                <span className="TodoCounterLevel" style={{width:'50%'}}></span>
                <p className="TodoCounterText">50%</p>
            </span>
        </React.Fragment>
    )
}

export {TodoCounter};