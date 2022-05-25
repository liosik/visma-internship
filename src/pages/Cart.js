import React, { useContext } from "react";
import productsContext from "../context/ProductsContext";
import "./Cart.css";
import ProductInCart from "../components/ProductInCart";

const Cart = () => {
  const { cart } = useContext(productsContext);
  const sum = cart.reduce((total, currentValue) => {
    return (
      total +
      (currentValue.sale
        ? Number(currentValue.salePrice)
        : Number(currentValue.price))
    );
  }, 0);
  return (
    <div>
      <div className="d-flex flex-column productListCart">
        {cart && cart.map((x, i) => <ProductInCart product={x} key={i} />)}
      </div>
      <div className="productListCart d-flex justify-content-end">
        <h2 className="mx-3">Total: {sum.toFixed(2)}$</h2>
      </div>
    </div>
  );
};
export default Cart;
