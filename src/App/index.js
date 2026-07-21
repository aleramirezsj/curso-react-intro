import React from 'react';
import './App.css';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

  let completedTodos = todos.filter(todo => !!todo.completed).length;
  let totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  
  return (
    <AppUI 
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
