import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mainContext from "./context/mainContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      name: "Flying Ninja T-Shirt",
      price: 18,
      picture:
        "http://kimiumbauten.ch/wp-content/uploads/2018/11/product-7.jpg",
    },
    {
      name: "Flying Ninja Hoodie",
      price: 35,
      picture:
        "http://kimiumbauten.ch/wp-content/uploads/2018/11/product-4.jpg",
    },
    {
      name: "Premium Quality Poster",
      price: 12,
      picture:
        "https://simplyunstuck.com/wp-content/uploads/2013/06/poster_3_up-5.jpg",
    },
    {
      name: "Woo Ninja Poster",
      price: 12,
      picture:
        "https://simplyunstuck.com/wp-content/uploads/2013/06/poster_4_up-5.jpg",
    },
    {
      name: "Premium Quality T-Shirt",
      price: 18,
      picture:
        "http://kimiumbauten.ch/wp-content/uploads/2018/11/product-6.jpg",
    },
    {
      name: "Woo Ninja Hoodie",
      price: 35,
      picture:
        "http://kimiumbauten.ch/wp-content/uploads/2018/11/product-1.jpg",
    },
    {
      name: "Flying Ninja Poster",
      price: 12,
      picture:
        "https://simplyunstuck.com/wp-content/uploads/2013/06/poster_2_up-5.jpg",
    },
    {
      name: "Ship Your Idea Poster",
      price: 12,
      picture:
        "https://simplyunstuck.com/wp-content/uploads/2013/06/poster_1_up-5.jpg",
    },
  ];

  return (
    <mainContext.Provider
      value={{
        cart,
        setCart,
        products,
      }}
    >
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </mainContext.Provider>
  );
}

export default App;
