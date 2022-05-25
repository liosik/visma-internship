import React, { useContext } from "react";
import productsContext from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const { products } = useContext(productsContext);
  return (
    <div className="d-flex">
      <div className="d-flex flex-column productList m-4">
        <div>
          <h2 className="m-5">Shop</h2>
          <div className="mx-5 d-flex justify-content-between">
            <p>Showing 1-8 of 8 results</p>
            <select className="px-3" name="sorting" id="sorting">
              <option value="Default Sorting">Default Sorting</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap m-5 ">
          {products.map((x, i) => {
            return <ProductCard product={x} key={i} />;
          })}
        </div>
        <div className="sticky m-1">
          <Link to="/addproduct">
            <button>Add</button>
          </Link>
        </div>
      </div>

      <div className="my-4 mx-3 d-flex flex-column">
        <div className="sidebaritem d-flex justify-content-center p-2 my-2">
          <input type="text" placeholder="Search & hit enter..." />
        </div>
        <div className="sidebaritem d-flex justify-content-center flex-column p-2 my-2">
          <div>
            <h4 className="borderbottom">Recent posts</h4>
            <p>
              Honest Qualities <br />
              Breadcause you're worth it <br />
              Your tray of goodies <br />
              Are carbs for you? <br />
              Healthy Bread solutions
            </p>
          </div>
        </div>
        <div className="sidebaritem d-flex justify-content-center flex-column p-2 my-2">
          <div>
            <h4 className="borderbottom">Recent Comments</h4>
            <p>
              Maria on Woo Ninja <br />
              Maria on Preamium Quality <br />
              Maria on Woo Logo <br />
              Maria on Ninja Silhouette <br />
              Maria on Ship Your Idea
            </p>
          </div>
        </div>
        <div className="sidebaritem d-flex justify-content-center flex-column p-2 my-2">
          <div>
            <h4 className="borderbottom">Archives</h4>
            <p>November 2016</p>
          </div>
        </div>
        <div className="sidebaritem d-flex justify-content-center flex-column p-2 my-2">
          <div>
            <h4 className="borderbottom">Categories</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
