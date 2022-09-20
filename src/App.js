import "./App.css";
import Employee from "./components/employee";

function App() {
  const showEmployees = true;
  const logo = <p className="logo">Employee Manager</p>;
  return (
    <div className="App">
      <header className="App-header">
        <>{logo}</>
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
            <Employee name="John Doe" role="Senior Dev" />
            <Employee name="Nimrod Allan" role="Full stack Engineer" />
            <Employee name="Andrew Odhees" role="" />
          </>
        ) : (
          <p>No Employees Available!</p>
        )}
      </div>
    </div>
  );
}

export default App;
