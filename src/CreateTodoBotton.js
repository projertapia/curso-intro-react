import React from "react";
import './CreateTodoBotton.css';

function CreateTodoBotton(){
    const onClickButton = (msg)=>{
        alert(msg);
    }


    return(

        <button className="CreateTodoBotton"
        onClick={() => onClickButton('Aquí se debería abrir el modal.')}
        >
            
        </button>
    )
}

export {CreateTodoBotton};