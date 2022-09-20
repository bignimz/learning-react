import "./App.css";
import Employee from "./components/employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Intern");
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
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
              }}
            />
            <Employee name="John Doe" role={role} />
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
