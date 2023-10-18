import { Rating } from "@mui/material";
import React from "react";

const ProductCard = ({ id, title, image, price, rating, author, subtitle }) => {
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-subtitle">{subtitle}</p>
        <p className="product-author">{author}</p>
        <div className="product-business">
          <Rating value={rating} size="small" readOnly />
          <p className="product_price">
            <h2>$ {price}</h2>
          </p>
        </div>
      </div>

      <img src={image}></img>

      <button >Add to Basket</button>
    </div>
  );
};

export default ProductCard;
