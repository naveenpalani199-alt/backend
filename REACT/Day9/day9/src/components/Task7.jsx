
import { useState } from "react";

const Task7 = () => {
  const [mobiles, setMobiles] = useState([
    { id: 1, brand: "Samsung", price: 20000 },
    { id: 2, brand: "Vivo", price: 15000 },
    { id: 3, brand: "Oppo", price: 18000 }
  ]);

  const addMobile = () => {
    if (!mobiles.some((mobile) => mobile.id === 4)) {
      setMobiles([
        ...mobiles,
        { id: 4, brand: "Apple", price: 60000 }
      ]);
    }
  };

  const updateMobile = () => {
    setMobiles(
      mobiles.map((mobile) =>
        mobile.id === 2
          ? { ...mobile, price: 25000 }
          : mobile
      )
    );
  };

  const deleteMobile = () => {
    setMobiles(mobiles.filter((mobile) => mobile.id !== 3));
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Task 7 - Mobile CRUD
      </h2>

      {mobiles.map((mobile) => (
        <div key={mobile.id} className="bg-gray-100 p-3 mb-2 rounded">
          <p>ID: {mobile.id}</p>
          <p>Brand: {mobile.brand}</p>
          <p>Price: ₹{mobile.price}</p>
        </div>
      ))}

      <div className="flex flex-wrap gap-2 mt-3">
        <button
          onClick={addMobile}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Mobile
        </button>

        <button
          onClick={updateMobile}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update Vivo
        </button>

        <button
          onClick={deleteMobile}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete Oppo
        </button>
      </div>
    </div>
  );
};

export default Task7;
