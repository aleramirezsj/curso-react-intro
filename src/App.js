import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const listaTareas = [
	{ text: 'Cambiar la garrafa', completed:false},
	{ text: 'Ir al padel', completed:false},
	{ text: 'actualizar el CV', completed:false}
]

function App() {
  return (
    <div className="App">
      <TodoCounter completed={3} total={5} />
      <TodoSearch />
        
      <TodoList>
        {listaTareas.map(tarea=>(
          <TodoItem 
            key={tarea.text} 
            text={tarea.text}
            completed= {tarea.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
