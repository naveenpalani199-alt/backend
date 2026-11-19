
import { useState } from "react";

const Task3 = () => {
  const [fruits, setFruits] = useState([
    "Apple", "Banana", "Orange", "Grapes"
  ]);

  const updateFruit = () => {
    setFruits(
      fruits.map((fruit) =>
        fruit === "Apple" ? "Mango" : fruit
      )
    );
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Fruits</h2>

      {fruits.map((e,i) => (
        <p key={i} className="bg-gray-100 p-2 mb-2 rounded">{e}</p>
      ))}

      <button onClick={updateFruit}  className="bg-green-600 text-white px-4 py-2 rounded">
        Update Apple to Mango
      </button>
    </div>
  );
};

export default Task3;
