import logo from "./logo.svg";
import "./App.css";
import Github from "./components/Github";
import Users from "./components/Users";
import Toggle from "./components/Toggle";
import Form from "./components/Form";
import Array from "./components/Array";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is a new change</p>
        <p>This is docker introduction</p>
        <p>I was changed</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Github />
      <Users/>
      <Toggle/>
      <Form/>
      <Array/>
      <Counter/>
    </div>
  );
}

export default App;
