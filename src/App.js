import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoBotton} from './CreateTodoBotton';
const todos= [
  {text:'Cortar cebolla', completed: false},
  {text:'tomar el curso de intro a React', completed: true},
  {text:'Llorar con la llorona', completed: false},
  {text:'lalalal', completed: true}
]

function App(props) {  
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
        
      <TodoList>
        {todos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoBotton/>
      
    </React.Fragment>
  );
}

export default App;
