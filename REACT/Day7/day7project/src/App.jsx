
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Counter from "./components/Counter";
import ChangeText from "./components/ChangeText";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Products</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/change-text">Change Text</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/change-text" element={<ChangeText />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
