import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
      <>
        <input type="button" value="+" className="CreateTodoButton"
        onClick={
          (event) => {
            console.log("Botón presionado")
            console.log(event)
            console.log(event.target)
          }
        } />
      </>
    );
  }

  export {CreateTodoButton};