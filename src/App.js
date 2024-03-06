import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoCount completed={3}  total={5}/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Elemento de prueba</p>
      <span>X</span>
    </li>
  );
}

function TodoCount({completed, total}) {
  return (
    <h1>
      Completaste {completed} de {total} TODOs
    </h1>
  );
}

<App>
  <TodoCounter />
  <TodoSearch />
  
  <TodoList>
    <TodoItem />
  </TodoList>

  <CreateTodoButton />
</App>

export default App;
