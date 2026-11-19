
import { useState } from "react";

const Task2 = () => {
  const [colors, setColors] = useState([
    "Red", "Blue", "Green"
  ]);

  const addColor = () => {
    if (!colors.includes("Yellow")) {
      setColors([...colors, "Yellow"]);
    }
  };

  return (
     <div className="bg-white p-5 rounded-lg shadow">
       <h2 className="text-xl font-bold mb-4 text-blue-600">
        Colors
        </h2>

      {colors.map((e, i) => (
        <p key={i}  className="bg-gray-100 p-2 mb-2 rounded">{e}</p>
      ))}

      <button onClick={addColor} className="bg-blue-600 text-white px-4 py-2 rounded">Add Yellow</button>
    </div>
  );
};

export default Task2;
