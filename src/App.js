//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoBotton} from './CreateTodoBotton';
const todos= [
  {text:'Cortar cebolla', completed: false},
  {text:'tomar el curso de intro a React', completed: false},
  {text:'Llorar con la llorona', completed: false},
  {text:'lalalal', completed: false}
]

function App(props) {  
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
        
      <TodoList>
        {todos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoBotton/>
      
    </React.Fragment>
  );
}

export default App;
