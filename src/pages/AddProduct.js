import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import productsContext from "../context/ProductsContext";
import "./AddProduct.css";

const AddProduct = () => {
  const { products, setProducts } = useContext(productsContext);
  const [checked, setChecked] = useState(false);
  const nameRef = useRef();
  const priceRef = useRef();
  const pictureRef = useRef();
  const salePriceRef = useRef();
  const nav = useNavigate();

  const addProductToShop = async () => {
    const newProduct = {
      id: products.length,
      name: nameRef.current.value,
      price: priceRef.current.value,
      picture: pictureRef.current.value,
      sale: checked,
    };
    if (checked) {
      newProduct.salePrice = salePriceRef.current.value;
    }
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    };
    console.log(options);
    const response = await fetch(`http://localhost:3001/products`, options);
    const data = await response.json();
    console.log(data);
    setProducts([...products, data]);
    nav("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column addProduct">
        <input ref={nameRef} placeholder="Product Name" type="text" />
        <input ref={priceRef} placeholder="Product Price" type="number" />
        <input ref={pictureRef} placeholder="Product Image" type="text" />
        <div className="d-flex">
          <input onChange={() => setChecked(!checked)} type="checkbox" />
          "Is Product On Sale?
        </div>

        {checked && (
          <input
            ref={salePriceRef}
            placeholder="Product Sale Price"
            type="number"
          />
        )}
        <button onClick={addProductToShop}>Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
