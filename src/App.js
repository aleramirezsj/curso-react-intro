import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const listaTareas = [
	{ text: 'Cambiar la garrafa', completed:true},
	{ text: 'Ir al padel', completed:false},
	{ text: 'actualizar el CV', completed:false}
]

function App() {
  const [todos, setTodos] = React.useState(listaTareas);
  let completedTodos = todos.filter(todo => !!todo.completed).length;
  let totalTodos = todos.length;
  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch />
        
      <TodoList>
        {todos.map(tarea=>(
          <TodoItem 
            key={tarea.text} 
            text={tarea.text}
            completed= {tarea.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
