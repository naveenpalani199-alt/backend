
import { useState } from "react";

const Task4 = () => {
  const [cities, setCities] = useState([
    "Chennai", "Madurai", "Coimbatore", "Trichy", "Salem"
  ]);

  const deleteCity = () => {
    setCities(cities.filter((city) => city !== "Chennai"));
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Task 4 - Delete City
      </h2>

      {cities.map((e, i) => (
        <p key={i} className="bg-gray-100 p-2 mb-2 rounded">
          {e}
        </p>
      ))}

      <button
        onClick={deleteCity}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Delete Chennai
      </button>
    </div>
  );
};

export default Task4;
