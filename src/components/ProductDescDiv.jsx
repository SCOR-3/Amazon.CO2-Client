import React, { Fragment } from "react";
import ProductSellerCarousel from "./ProductSellerCarousel";
import { Rating } from "@mui/material";
import { useSelector } from "react-redux";

const ProductDescDiv = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const currentProduct = selectedProduct && selectedProduct.product;
  const currentSellers = selectedProduct && selectedProduct.sellers;
  const selectedSeller = useSelector((state) => state.selected.selectedItem);
  const discount =
    selectedSeller &&
    Math.floor(
      ((selectedSeller.mrp - selectedSeller.price) / selectedSeller.mrp) * 100
    );
  return (
    <Fragment>
      {currentProduct ? (
        <div className="product-desc-div">
          <h1>{currentProduct.name}</h1>
          {/* <span> 3.8</span> */}
          <Rating
            value={Math.ceil(Math.random() * 5)}
            readOnly
            size="small"
            className="product-rating"
          />
          <hr />
          <div className="great-indian-festival">Great Indian Festival</div>
          <p className="product-pricing">
            <span className="discount-percentage">-{discount}%</span>{" "}
            <span className="price-symbol-large">₹</span>
            {selectedSeller.price}
            <span className="price-symbol-large">00</span>
          </p>
          <p className="mrp">
            M.R.P: <span className="mrp-pricing">₹{selectedSeller.mrp}</span>
          </p>
          <p className="amazon-prime-verified">
            <i class="fa-solid fa-check"></i>
            <i class="fa-brands fa-amazon"></i>
          </p>
          {/* <p className="taxes">Inclusive of all taxes</p> */}

          <hr />
          <ProductSellerCarousel />
        </div>
      ) : null}
    </Fragment>
  );
};

export default ProductDescDiv;
