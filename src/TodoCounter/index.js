import React from 'react';
import './TodoCounter.css'; 
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos,} = React.useContext(TodoContext);
    return (
      <h1 className="TodoCounter">
        {completedTodos === totalTodos ? '¡Felicidades! Has completado todas tus tareas.' : `Completaste ${completedTodos} de ${totalTodos} TODOs`}
      </h1>
    );
  }

  export {TodoCounter};