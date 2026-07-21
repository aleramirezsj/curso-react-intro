import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && (
          <><TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <p>Ocurrió un error</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
        {searchedTodos.map(tarea=>(
          <TodoItem 
            key={tarea.text} 
            text={tarea.text}
            completed= {tarea.completed}
            onComplete={()=>completeTodo(tarea.text)}
            onDelete={()=>deleteTodo(tarea.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export { AppUI };