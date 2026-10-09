import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
    return (
      <>
        <input type="button" value="+" className="CreateTodoButton"
        onClick={
          (event) => {
            setOpenModal(state => !state);
          }
        } />
      </>
    );
  }

  export {CreateTodoButton};