import { useState } from "react";


const Task1 = () => {


     const [employees] = useState([

    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Bala", salary: 45000 },
    { id: 3, name: "Kumar", salary: 60000 },
    { id: 4, name: "Vijay", salary: 35000 },
    { id: 5, name: "Priya", salary: 55000 }
  ]);

  const [showFiltered, setShowFiltered] = useState(false);

  const filteredEmployees = employees.filter(
    (employee) => employee.salary > 40000
  );
  return (
    <div>
      <h2>Employee Salary Filter</h2>

      <button onClick={() => setShowFiltered(true)}>
        Salary Above ₹40,000
      </button>

      <button onClick={() => setShowFiltered(false)}>
        Show All
      </button>

      {(showFiltered ? filteredEmployees : employees).map((employee) => (
        <div key={employee.id}>
          <p>Name: {employee.name}</p>
          <p>Salary: ₹{employee.salary}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Task1