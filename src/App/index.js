import React from 'react';
import './App.css';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
