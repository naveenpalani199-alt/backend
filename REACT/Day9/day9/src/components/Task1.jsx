
import { useState } from "react";

const Task1 = () => {
  const [languages] = useState([
    "HTML", "CSS", "JavaScript", "Python", "Java"
  ]);

  return (
    <div  className="space-y-2">
      <h2 className="text-xl font-bold mb-4">Programming Languages</h2>

      {languages.map((e,i) => (
        <p key={i}  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">{e}</p>
      ))}
    </div>
  );
};

export default Task1;
