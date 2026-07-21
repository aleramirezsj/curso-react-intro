import './TodoSearch.css';
import React from 'react';

function TodoSearch({ searchValue, setSearchValue }) {
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