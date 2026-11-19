
import { useState } from "react";

const Task10 = () => {
  const [number, setNumber] = useState(10);

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Task 10 - Number Operations
      </h2>

      <h1 className="text-3xl font-bold mb-2">{number}</h1>

      <p className="mb-4">
        {number % 2 === 0 ? "Even Number" : "Odd Number"}
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setNumber(number + 5)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          +5
        </button>

        <button
          onClick={() => setNumber(number - 2)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          -2
        </button>

        <button
          onClick={() => setNumber(number * 3)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          ×3
        </button>

        <button
          onClick={() => setNumber(10)}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Task10;
