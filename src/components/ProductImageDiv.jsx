import React from "react";

const ProductImageDiv = ({ src }) => {
  return (
    <div className="product-img-div">
        <img className="product-img" src={src}/>
    </div>
  );
};

export default ProductImageDiv;
