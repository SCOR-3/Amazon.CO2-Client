import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "@mui/material";
import { addItem, calculateBill } from "../slices/cartSlice";
const ProductPriceDiv = () => {
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

  const selectedSeller = useSelector((state) => state.selected.selectedItem);
  const product = useSelector((state) => state.product.selectedProduct);
  const dispatch = useDispatch();
  const addItemToCart = (product, seller) => {
    const obj = {
      item: product,
      seller,
    };
    dispatch(addItem(obj));
    dispatch(calculateBill());
  };
  return (
    <Fragment>
      {selectedSeller && product ? (
        <div className="product-price-div-wrapper">
          <div className="product-price-div">
            <div className="product-pricing-wrapper">
              <p className="product-pricing">
                {" "}
                <span className="price-symbol-large">₹</span>
                {selectedSeller.price}
                <span className="price-symbol-large">00</span>
              </p>
              <div className="carbon-point-div-wrapper">
                <Tooltip
                  title={`You will earn ${selectedSeller.carbon_points} Carbon Points`}
                  placement="top-end"
                  arrow
                  className="carbon-point-tooltip"
                >
                  <div className="carbon-point-div">
                    <span className="carbon-point-chip">
                      <i class="fa-solid fa-seedling">
                        {" "}
                        {`  ${selectedSeller.carbon_points}`}{" "}
                      </i>
                    </span>
                  </div>
                </Tooltip>
              </div>
            </div>
            <p className="amazon-prime-verified">
              <i class="fa-solid fa-check"></i>
              <i class="fa-brands fa-amazon"></i>
              <span> One day</span>
            </p>
            <p className="delivery-date">
              FREE delivery{" "}
              <span class>
                Tomorrow, {`${d.getDate()} ${months[d.getMonth()]}`}
              </span>
              . Order within <span className="green">8 hrs 3 mins.</span>{" "}
              Details
            </p>
            <p className="delivery-address">
              <i class="fa-solid fa-location-dot"></i>Deliver to Samik - New
              Delhi 110087
            </p>
            <h3 className="stock-availability">
              <span id="in-stock">In Stock</span>
            </h3>
            <p className="price-div-seller-info">
              Sold by{" "}
              <span>
                {selectedSeller.sellerId && selectedSeller.sellerId.name}
              </span>{" "}
              and <span>Fulfilled by Amazon</span>
            </p>
            <button
              className="price-div-btns"
              id="add-to-cart-btn"
              onClick={() => addItemToCart(product, selectedSeller)}
            >
              Add to Cart
            </button>
            <button className="price-div-btns" id="buy-now-btn">
              {" "}
              Buy Now
            </button>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default ProductPriceDiv;
