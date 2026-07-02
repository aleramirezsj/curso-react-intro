import './TodoSearch.css';
import React from 'react';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log("se está buscando:"+searchValue);
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