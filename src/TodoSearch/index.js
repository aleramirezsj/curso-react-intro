import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext'; 

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
      <input placeholder="Escriba su búsqueda aquí..." className="TodoSearch" 
            onChange={
              (event)=> {
                console.log(event.target.value)
                setSearchValue(event.target.value)
              }
            } />
    );
  }

  export {TodoSearch};