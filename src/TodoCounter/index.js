import './TodoCounter.css'; 

function TodoCounter({completed, total}) {
    return (
      <h1 className="TodoCounter">
        {completed === total ? '¡Felicidades! Has completado todas tus tareas.' : `Completaste ${completed} de ${total} TODOs`}
      </h1>
    );
  }

  export {TodoCounter};