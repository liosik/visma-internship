import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex mynavbar align-items-center">
      <div className="d-flex flex-grow-1">
        <div className="filler"></div>
        <Link to="/">
          <button className="m-3">SHOP</button>
        </Link>

        <Link to="/cart">
          <button className="mt-3">CART</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
