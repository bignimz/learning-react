import logo from "./logo.svg";
import "./App.css";
import Employee from "./components/employee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <>
        <Employee name="John" role="Senior Dev" />
        <Employee />
        <Employee />
      </>
    </div>
  );
}

export default App;
