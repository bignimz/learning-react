import logo from "./logo.svg";
import "./App.css";
import Employee from "./components/employee";

function App() {
  const showEmployees = true;
  const logo = <p className="logo">Employee Manager</p>;
  return (
    <div className="App">
      <header className="App-header">
        {logo}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        {showEmployees ? (
          <>
            <Employee name="John" role="Senior Dev" />
            <Employee />
            <Employee />
          </>
        ) : (
          <p>No Employees Available!</p>
        )}
      </div>
    </div>
  );
}

export default App;
