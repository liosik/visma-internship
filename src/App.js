import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import productsContext from "./context/ProductsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <productsContext.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
      }}
    >
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </productsContext.Provider>
  );
}

export default App;
