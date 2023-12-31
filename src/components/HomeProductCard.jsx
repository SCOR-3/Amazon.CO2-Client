import { Tooltip } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, calculateBill } from "../slices/cartSlice";
import { Link } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const d = new Date();
  const tDate = d.getDate() + 1;
  d.setDate(tDate);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const sellers = product && product.sellers;
  sellers.sort((a, b) => b.carbon_points - a.carbon_points);

  const discount =
    sellers.length > 0 &&
    Math.floor(((sellers[0].mrp - sellers[0].price) / sellers[0].mrp) * 100);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ item: product, seller: product.sellers[0] }));
    dispatch(calculateBill());
  };

  return (
    <div className="home-product-card">
      <Link to={`/product/${product._id}`}>
        <center>
          <img src={product.image} />
        </center>
        <p className="title">{product.name}</p>
      </Link>
      <div className="carbon-point-div">
        <span className="carbon-point-chip">
          <i class="fa-solid fa-seedling">
            {" "}
            {` ${sellers && sellers[0].carbon_points}`}{" "}
          </i>
        </span>
      </div>
      {/* <div className="great-indian-festival">Great Indian Festival</div> */}
      <p className="product-pricing">
        <span className="discount-percentage">-{discount}%</span>{" "}
        <span className="price-symbol-large">₹</span>
        {sellers && sellers[0].price}
        <span className="price-symbol-large">00</span>
      </p>
      <p className="mrp">
        M.R.P: <span className="mrp-pricing">₹{sellers && sellers[0].mrp}</span>
      </p>
      <p className="amazon-prime-verified">
        <i class="fa-solid fa-check"></i>
        <i class="fa-brands fa-amazon"></i>
      </p>
      <p className="delivery-date">
        FREE delivery{" "}
        <span class>Tomorrow, {`${d.getDate()} ${months[d.getMonth()]}`}</span>.
        Order within <span className="green">8 hrs 3 mins.</span> Details
      </p>
      <button onClick={() => addToCart()}>Add to Cart</button>
    </div>
  );
};

export default HomeProductCard;
