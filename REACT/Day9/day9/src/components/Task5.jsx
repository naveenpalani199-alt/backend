
import { useState } from "react";

const Task5 = () => {
  const [person, setPerson] = useState({
    name: "Arun",
    age: 22,
    city: "Chennai"
  });

  const addCountry = () => {
    setPerson({ ...person, country: "India" });
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Task 5 - Add Object Property
      </h2>

      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
      <p>Country: {person.country ?? "Not Added"}</p>

      <button
        onClick={addCountry}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
      >
        Add Country
      </button>
    </div>
  );
};

export default Task5;
