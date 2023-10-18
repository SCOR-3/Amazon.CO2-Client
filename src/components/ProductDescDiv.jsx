import React from "react";
import ProductSellerCarousel from "./ProductSellerCarousel";
import { Rating } from "@mui/material";

const ProductDescDiv = () => {
  return (
    <div className="product-desc-div">
      <h1>
        LG 21:9 Curved UltraWide ¢ QHD IPS Monitor 86.42 cm (34 Inch), QHD 3440
        x 1440, HDR 10, sRGB 99% (Typ.),DP, HDMI, USB Type-C ¢, LAN (RJ45) Port,
        Speaker, Headphone Out, Height Adjust Stand, 34WQ75C
      </h1>
      {/* <span> 3.8</span> */}
      <Rating value={3.8} readOnly size="small" className="product-rating" />
      <hr />
      <p className="product-pricing">
        <span className="discount-percentage">-23%</span>{" "}
        <span className="price-symbol-large">₹</span>43,999<span className="price-symbol-large">00</span>
      </p>
      <p className="mrp">M.R.P: <span className="mrp-pricing">₹57,000</span></p>
      <p className="amazon-prime-verified">
        <i class="fa-solid fa-check"></i>
        <i class="fa-brands fa-amazon"></i>
      </p>
      <p className="taxes">Inclusive of all taxes</p>
      <hr />
      <ProductSellerCarousel />
    </div>
  );
};

export default ProductDescDiv;
