import React from "react";
import './CreateTodoBotton.css';

function CreateTodoBotton(props){
    const onClickButton = ()=>{
        //prevState acepta true o false
        //prevState acepta función y guarda el previo
        props.setOpenModal(prevState =>!prevState);
    }


    return(

        <button className="CreateTodoBotton"
        onClick={onClickButton}
        >
        </button>
    )
}

export {CreateTodoBotton};