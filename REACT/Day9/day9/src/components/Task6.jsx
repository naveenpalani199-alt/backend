
import { useState } from "react";

const Task6 = () => {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Innova",
    price: 2000000,
    color: "White"
  });

  const updatePrice = () => {
    setCar({ ...car, price: 2500000 });
  };

  const deleteColor = () => {
    const { color, ...remaining } = car;
    setCar(remaining);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Task 6 - Update and Delete Object
      </h2>

      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Price: ₹{car.price}</p>
      <p>Color: {car.color ?? "Deleted"}</p>

      <button
        onClick={updatePrice}
        className="bg-green-600 text-white px-4 py-2 rounded mt-3 mr-2"
      >
        Update Price
      </button>

      <button
        onClick={deleteColor}
        className="bg-red-600 text-white px-4 py-2 rounded mt-3"
      >
        Delete Color
      </button>
    </div>
  );
};

export default Task6;
