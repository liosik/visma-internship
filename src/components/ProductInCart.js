import React from "react";
import "./ProductInCart.css";

const ProductInCart = ({ product }) => {
  return (
    <div className="productInCart d-flex justify-content-between">
      <img src={product.picture} alt={product.name} />
      <h4>
        <b>{product.name}</b>
      </h4>
      <h4>{product.price.toFixed(2)}$</h4>
    </div>
  );
};

export default ProductInCart;
