import React from "react";
import "./ProductInCart.css";

const ProductInCart = ({ product }) => {
  const { name, picture, sale, price, salePrice } = product;
  return (
    <div className="productInCart d-flex justify-content-between">
      <img src={picture} alt={name} />
      <h4>
        <b>{name}</b>
      </h4>
      {sale && (
        <div>
          <h1 style={{ color: "green" }}>SALE</h1>
        </div>
      )}
      <h4>
        {sale ? Number(salePrice).toFixed(2) : Number(price).toFixed(2)}${" "}
      </h4>
    </div>
  );
};

export default ProductInCart;
