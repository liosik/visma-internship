import React, { useContext } from "react";
import "./ProductCard.css";
import mainContext from "../context/mainContext";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(mainContext);
  const { name, price, picture } = product;
  const isInCart = cart.filter((x) => x.name === product.name);
  const addToCart = () => {
    setCart([...cart, product]);
    alert("ADDED TO CART");
  };
  const removeFromCart = () => {
    const newCart = cart.filter((x) => x.name !== name);
    setCart(newCart);
    alert("REMOVED FROM CART");
  };
  return (
    <div className="productCard d-flex flex-column align-items-center justify-content-between">
      <img src={picture} alt={name} />
      <h4>
        <b>{name}</b>
      </h4>
      <h4>{price.toFixed(2)}$</h4>
      {isInCart.length > 0 ? (
        <button
          onClick={removeFromCart}
          style={{ backgroundColor: "red" }}
          className="addtocart"
        >
          REMOVE FROM CART
        </button>
      ) : (
        <button onClick={addToCart} className="addtocart">
          ADD TO CART
        </button>
      )}
    </div>
  );
};

export default ProductCard;
