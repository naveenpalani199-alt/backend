
import { useState } from "react";

const Task8 = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Task 8 - Boolean Toggle
      </h2>

      <p className={`text-lg font-bold mb-3 ${
        isActive ? "text-green-600" : "text-red-600"
      }`}>
        {isActive ? "Active" : "Inactive"}
      </p>

      <button
        onClick={() => setIsActive(!isActive)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Toggle
      </button>
    </div>
  );
};

export default Task8;
