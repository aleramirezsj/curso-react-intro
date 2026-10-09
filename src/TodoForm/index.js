import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {setOpenModal, addTodo} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue('');
        setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Cortar cebolla para el almuerzo" 
                value={newTodoValue}
                onChange={(event) => setNewTodoValue(event.target.value)}
            />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel}
                    className="TodoForm-button 
                        TodoForm-button--cancel" type="button">Cancelar</button>
                <button 
                    className="TodoForm-button
                        TodoForm-button--add" type="submit">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };