import React from "react";
import {TodoContext} from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoBotton} from '../CreateTodoBotton';

function AppUI(){    
    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            {/* Podemos acceder a nuestro contexto con el consumer */}
            <TodoContext.Consumer>
                {({error,
                loading,
                searchedTodos,
                completeTodo,
                deleteTodo})=>(
                    <TodoList>
                        {error && <p>Desesperate, hubo un error...</p>}
                        {loading && <p>Estamos cargando, no desesperes...</p>}
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
                )}
            </TodoContext.Consumer>

            <CreateTodoBotton/>

            </React.Fragment>
    );
}

export {AppUI}