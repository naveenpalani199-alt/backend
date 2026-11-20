
import { useEffect, useState } from "react";

const Task2 = () => {
  const [showDatas, setShowDatas] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((response) => response.json())
      .then((data) => setShowDatas(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-3">
        Product List
      </h1>

      <h2 className="text-lg font-semibold mb-4">
        Total products: {showDatas.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {showDatas.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-contain"
            />

            <h3 className="font-bold">{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task2;
