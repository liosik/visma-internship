import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import productsContext from "./context/ProductsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      name: "Flying Ninja T-Shirt",
      price: 18,
      picture:
        "http://kimiumbauten.ch/wp-content/uploads/2018/11/product-7.jpg",
      sale: true,
      salePrice: 13,
    },
    {
      name: "Flying Ninja Hoodie",
      price: 35,
      picture:
        "http://kimiumbauten.ch/wp-content/uploads/2018/11/product-4.jpg",
      sale: false,
    },
    {
      name: "Premium Quality Poster",
      price: 12,
      picture:
        "https://simplyunstuck.com/wp-content/uploads/2013/06/poster_3_up-5.jpg",
      sale: false,
    },
    {
      name: "Woo Ninja Poster",
      price: 12,
      picture:
        "https://simplyunstuck.com/wp-content/uploads/2013/06/poster_4_up-5.jpg",
      sale: true,
      salePrice: 10,
    },
    {
      name: "Premium Quality T-Shirt",
      price: 18,
      picture:
        "http://kimiumbauten.ch/wp-content/uploads/2018/11/product-6.jpg",
      sale: false,
    },
    {
      name: "Woo Ninja Hoodie",
      price: 35,
      picture:
        "http://kimiumbauten.ch/wp-content/uploads/2018/11/product-1.jpg",
      sale: false,
    },
    {
      name: "Flying Ninja Poster",
      price: 12,
      picture:
        "https://simplyunstuck.com/wp-content/uploads/2013/06/poster_2_up-5.jpg",
      sale: false,
    },
    {
      name: "Ship Your Idea Poster",
      price: 12,
      picture:
        "https://simplyunstuck.com/wp-content/uploads/2013/06/poster_1_up-5.jpg",
      sale: false,
    },
  ]);
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
