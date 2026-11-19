
import { useState } from "react";

const Task3 = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", marks: 75 },
    { id: 2, name: "Bala", marks: 85 },
    { id: 3, name: "Kumar", marks: 65 }
  ]);

  const addStudent = () => {
    const newStudent = {
      id: 4,
      name: "Priya",
      marks: 90
    };

    if (!students.some((student) => student.id === 4)) {
      setStudents([...students, newStudent]);
    }
  };

  const updateStudent = () => {
    setStudents(
      students.map((student) =>
        student.id === 2
          ? { ...student, marks: 95 }
          : student
      )
    );
  };

  const deleteStudent = () => {
    setStudents(
      students.filter((student) => student.id !== 3)
    );
  };

  return (
    <div >
      <h2>
        Task 3 - Student Records CRUD
      </h2>

      {students.map((student) => (
        <div
          key={student.id}
          
        >
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Marks: {student.marks}</p>
        </div>
      ))}

      <div>
        <button
          onClick={addStudent}
         
        >
          Add Priya
        </button>

        <button
          onClick={updateStudent}
         
        >
          Update Bala
        </button>

        <button
          onClick={deleteStudent}
        >
          Delete Kumar
        </button>
      </div>
    </div>
  );
};

export default Task3;
