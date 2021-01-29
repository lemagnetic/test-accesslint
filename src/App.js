import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      <form>
          <input text="" value="123" />
          <label>Test</label>
        </form>

        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <button>teste</button>
      </div>
    </div>
  );
}

export default App;
