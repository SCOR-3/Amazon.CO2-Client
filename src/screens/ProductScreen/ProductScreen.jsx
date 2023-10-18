import React from "react";
import "./ProductScreen.css";
import ProductImageDiv from "../../components/ProductImageDiv";
import ProductDescDiv from "../../components/ProductDescDiv";

const ProductScreen = () => {
  return (
    <div className="product-screen-wrapper">
      <div className="product-screen-div">
        <ProductImageDiv
          src={"https://m.media-amazon.com/images/I/61ZXfJDT+1L._SX522_.jpg"}
        />
        <ProductDescDiv />
        <div className="product-price-div">C</div>
      </div>
    </div>
  );
};

export default ProductScreen;
