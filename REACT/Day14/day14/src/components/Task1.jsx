
import { useEffect, useState } from "react";

const Task1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=3")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">
        Product List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-contain"
            />

            <h2 className="font-semibold mt-3">
              {product.title}
            </h2>

            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task1;
