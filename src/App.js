import "./App.css";
import Employee from "./components/employee";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "./components/editemployee";

function App() {
  const [employees, setEmployees] = useState([
    {
      img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg",
      firstName: "John",
      lastName: "Doe",
      role: "Manager",
      department: "IT",
    },
    {
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
      firstName: "Nmrod",
      lastName: "Allan",
      role: "Senior Dev",
      department: "IT",
    },
    {
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      firstName: "Mike",
      lastName: "Moja",
      role: "",
      department: "",
    },
    {
      img: "https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg",
      firstName: "Mary",
      lastName: "Poper",
      role: "HR Manager",
      department: "Admin",
    },
    {
      img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg",
      firstName: "Jane",
      lastName: "Doe",
      role: "Receptionist",
      department: "Admin",
    },
    {
      img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",
      firstName: "Philip",
      lastName: "Salazar",
      role: "CTO",
      department: "IT",
    },
  ]);

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

        <div className="my-5 employees-wrapper ">
          {employees.map((employee) => {
            console.log(uuidv4());
            return (
              <div className="card shadow-lg mb-3">
                <div className="row g-0">
                  <Employee key={uuidv4()} />
                  <div className="col-md-4">
                    <Employee img={employee.img} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <Employee firstName={employee.firstName} />{" "}
                        <Employee lastName={employee.lastName} />
                      </h5>
                      <p className="card-text">
                        <Employee role={employee.role} />
                      </p>
                      <div className="card-text">
                        <small className="text-muted">
                          <Employee department={employee.department} />
                        </small>
                      </div>
                      <EditEmployee />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
