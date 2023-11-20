import logo from './logo.svg';
import './App.css';
import {useState} from "react";

console.log('w')

function App() {
  const [state, setState] = useState(0)

  const increment = () => setState(val => val + 1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={increment}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React { state }
        </a>
      </header>
    </div>
  );
}

export default App;
