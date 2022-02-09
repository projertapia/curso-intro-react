import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoBotton} from './CreateTodoBotton';
const defaultodos= [
  {text:'Cortar cebolla', completed: false},
  {text:'tomar el curso de intro a React', completed: true},
  {text:'Llorar con la llorona', completed: false},
  {text:'lalalal', completed: true}
]

function App(props) {
  const[todos,setTodos] = React.useState(defaultodos);
  const [searchValue, setSearchValue] = React.useState(''); 
  
  const completeTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed= {completeTodos}
      />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
        
      <TodoList>
        {searchedTodos.map(todo=>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed
          }/>
        ))}
      </TodoList>

      <CreateTodoBotton/>
      
    </React.Fragment>
  );
}

export default App;
