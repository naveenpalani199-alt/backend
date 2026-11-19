
import { useState } from "react";

const ChangeText = () => {
  const [text, setText] = useState("React");

  return (
    <div>
      <h2>Change Text</h2>
      <h1>{text}</h1>

      <button onClick={() => setText("Node")}>
        Change to Node
      </button>
    </div>
  );
};

export default ChangeText;
