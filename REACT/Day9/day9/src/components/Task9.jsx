
import { useState } from "react";

const Task9 = () => {
  const [person] = useState({
    name: "Arun",
    age: 0,
    city: null,
    phone: undefined
  });

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Task 9 - Nullish Operator
      </h2>

      <p>Name: {person.name ?? "Not Available"}</p>
      <p>Age: {person.age ?? "Not Available"}</p>
      <p>City: {person.city ?? "Not Available"}</p>
      <p>Phone: {person.phone ?? "Not Available"}</p>
    </div>
  );
};

export default Task9;
