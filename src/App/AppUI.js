import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { loading,
          error, 
          searchedTodos, 
          completeTodo, 
          deleteTodo, 
          openModal,
          setOpenModal } = React.useContext(TodoContext);
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch  />
      
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
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && 
        <Modal>
          <TodoForm />
        </Modal>}
    </div>
  );
}

export { AppUI };