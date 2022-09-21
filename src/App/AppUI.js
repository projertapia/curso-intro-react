import React from "react";
import {TodoContext} from './../TodoContext';
import {TodoCounter} from './../TodoCounter';
import {TodoSearch} from './../TodoSearch';
import {TodoList} from './../TodoList';
import {TodoItem} from './../TodoItem';
import {TodoForm} from './../TodoForm';
import {CreateTodoBotton} from './../CreateTodoBotton';
import {Modal} from './../Modal';

function AppUI(){
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            {/* Podemos acceder a nuestro contexto con el consumer */}
            <TodoList>
                {error && <p>Desesperate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes... </p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}

                {searchedTodos.map(todo=>(
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete = {()=> completeTodo(todo.text)}
                onDelete = {()=> deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoBotton
                setOpenModal={setOpenModal}
            />

            </React.Fragment>
    );
}

export {AppUI}