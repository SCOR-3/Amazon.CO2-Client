import { Chip, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addCredit, calculateBill } from "../slices/cartSlice";

const CarbonCreditCard = ({ project }) => {
  const { image, title, location, price, label } = project;

  const dispatch = useDispatch();

  const addCreditToCart = () => {
    dispatch(addCredit({item: project}));
    dispatch(calculateBill());
  };

  return (
    <div className="carbon-credit-card-wrapper">
      <div className="carbon-credit-card">
        <Chip variant="outlined" label={label} color="success" />
        <p className="title">{title}</p>
        <center>
          <img src={image}></img>
        </center>
        <p>
          <i class="fa-solid fa-location-dot"></i> {location}
        </p>
        <div className="price-container">
          <span>₹</span>
          <span className="item-price">{price}</span>
          <span>00</span>
          per credit
        </div>
        <p className="credit-desc">
          Each credit purchased for this project removes 1 tonne of CO2 from the
          atmosphere
        </p>
        <button className="cart" onClick={() => addCreditToCart()}>
          Add 1 credit to cart
        </button>
        <p className="partial-credits">
          Partial Credits available. <a>Learn more</a>
        </p>
      </div>
    </div>
  );
};

export default CarbonCreditCard;
