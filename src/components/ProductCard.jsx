import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, image, price, rating, author, subtitle }) => {
  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <div className="product-info">
          <p className="product-title">{title}</p>
          <p className="product-subtitle">{subtitle}</p>
          <p className="product-author">{author}</p>
          <div className="product-business">
            <Rating value={rating} size="small" readOnly />
            <div className="product_price">
              <div className="price-container">
                <span>₹</span>
                <span className="item-price">43,999</span>
                <span>00</span>
              </div>
            </div>
          </div>
        </div>

        <img src={image}></img>
      </Link>
      <div className="product-add-btn-div">
        <button className="product-add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
