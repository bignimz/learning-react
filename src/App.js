import "./App.css";
import Employee from "./components/employee";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [role, setRole] = useState("Intern");
  const showEmployees = true;
  const logo = <p className="logo">Employee Manager</p>;
  return (
    <div className="App">
      <header className="App-header mb-5">
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
          </>
        ) : (
          <p>No Employees Available!</p>
        )}

        <div class="my-5">
          <table class="table table-hover table-striped">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <Employee firstName="John" />
                </td>
                <td>
                  <Employee firstName="Doe" />
                </td>
                <td>
                  <Employee role={role} />
                </td>
                <td>
                  <Employee department="IT Department" />
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <Employee firstName="Nimrod" />
                </td>
                <td>
                  <Employee lastName="Allan" />
                </td>
                <td>
                  <Employee role="Full Stack Developer" />
                </td>
                <td>
                  <Employee department="IT Department" />
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <Employee firstName="Andrew" />
                </td>
                <td>
                  <Employee lastName="Odhees" />
                </td>
                <td>
                  <Employee role="" />
                </td>
                <td>
                  <Employee department="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
