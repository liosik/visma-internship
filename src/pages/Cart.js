import React, { useContext, useEffect, useState } from "react";
import mainContext from "../context/mainContext";
import "./Cart.css";
import ProductInCart from "../components/ProductInCart";

const Cart = () => {
  const { cart } = useContext(mainContext);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let newSum = 0;
    cart.forEach((x) => {
      const { sale, price, salePrice } = x;
      if (sale) {
        newSum += salePrice;
      } else {
        newSum += price;
      }
    });
    setSum(newSum);
  }, []);
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
