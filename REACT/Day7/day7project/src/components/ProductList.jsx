
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button onClick={() => navigate(`/product/${product.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
