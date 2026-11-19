
import { useState } from "react";

const Task2 = () => {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Headphone", price: 2000 }
  ]);

  const [showFiltered, setShowFiltered] = useState(false);

  const totalPrice = products.reduce(
    (total, product) => total + product.price, 0
  );

  const filteredProducts = products.filter(
    (product) => product.price > 2000
  );

  return (
    <div>
      <h2>Product Price - Sum of Values</h2>

      <button onClick={() => setShowFiltered(true)}>
        Price Above ₹2,000
      </button>

      <button onClick={() => setShowFiltered(false)}>
        Show All
      </button>

      {(showFiltered ? filteredProducts : products).map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: ₹{product.price}</p>
          <hr />
        </div>
      ))}

      <h3>Total Products: {products.length}</h3>
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
};

export default Task2;
