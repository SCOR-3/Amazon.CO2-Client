import React, { Fragment } from "react";

const ProductImageDiv = ({ src }) => {
  return (
    <Fragment>
      <div className="product-img-div">
        <div>
          <img className="product-img" src={src} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductImageDiv;
