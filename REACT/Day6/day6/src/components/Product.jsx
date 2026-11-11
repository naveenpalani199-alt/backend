
const Product = () => {

  const product = {
    id: "P101",
    name: "Galaxy S24",
    price: 20000,
    brand: "Samsung",
    category: "Electronics"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          {product.name}
        </h1>

        <h2 className="text-lg font-semibold">
          {product.brand} Smartphone
        </h2>

        <p className="mt-3">
          Brand: {product.brand}
        </p>

        <p className="mt-3">
          Category: {product.category}
        </p>

        <p className="mt-3">
          Product ID: {product.id}
        </p>

        <h2 className="text-2xl font-bold text-green-600 mt-5">
          ₹{product.price * 0.9}
        </h2>

        <p className="text-gray-500 line-through">
          Original price: ₹{product.price}
        </p>

      </div>
    </div>
  );
};

export default Product;
