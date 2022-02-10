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
  
  const completedTodos = todos.filter(todos => !!todos.completed).length;
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

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text == text);    
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text == text);    
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed= {completedTodos}
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
            completed={todo.completed}
            onComplete = {()=> completeTodo(todo.text)}
            onDelete = {()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoBotton/>
      
    </React.Fragment>
  );
}

export default App;
