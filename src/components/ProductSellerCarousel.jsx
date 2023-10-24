import React, { Fragment, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Chip from "@mui/material/Chip";
import { Rating } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeSelected } from "../slices/selectedSlice";

const ProductSellerCarousel = () => {
  const settings = {
    autoplay: false,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    loop: false,
  };
  const currentProduct = useSelector((state) => state.product.selectedProduct);
  const sellerDetails = currentProduct && currentProduct.sellers;

  const [selected, setSelected] = useState();
  useEffect(() => {
    dispatch(changeSelected(sellerDetails && sellerDetails[0]));
    setSelected(sellerDetails && sellerDetails[0]._id);
  }, []);
  const dispatch = useDispatch();
  const change = (seller) => {
    dispatch(changeSelected(seller));
    setSelected(seller._id);
  };
  return (
    <Fragment>
      <h3>Help us make Amazon green: </h3>
      <Slider {...settings}>
        {sellerDetails &&
          sellerDetails.map((seller) => {
            return (
              <div className="seller-slide-wrapper" key={seller.sellerId && seller.sellerId._id}>
                <div
                  className={
                    seller._id === selected
                      ? "selected-slide seller-slide"
                      : "seller-slide"
                  }
                  onClick={() => change(seller)}
                >
                  <div className="seller-slide-heading">
                    <div className="seller-name-div">
                      <h2 className="seller-name">{seller.sellerId && seller.sellerId.name}</h2>
                    </div>
                    <div className="carbon-point-div">
                      <span className="carbon-point-chip">
                        <i class="fa-solid fa-seedling">
                          {" "}
                          {`  ${seller.carbon_points}`}{" "}
                        </i>
                      </span>
                    </div>
                  </div>

                  <Rating
                    size="small"
                    value={seller.sellerId && seller.sellerId.rating}
                    className="seller-rating"
                    // precision={0.5}
                    readOnly
                  />
                  <br />
                  <span className="product-price">
                    <span className="discount-percentage">
                      -
                      {Math.floor(
                        ((seller.mrp - seller.price) / seller.mrp) * 100
                      )}
                      %{" "}
                    </span>
                    <span className="price-symbol">₹</span>
                    {seller.price}
                  </span>
                  <p className="mrp">
                    M.R.P: <span className="mrp-pricing">₹{seller.mrp}</span>
                  </p>
                  <br />
                </div>
              </div>
            );
          })}
      </Slider>
    </Fragment>
  );
};

export default ProductSellerCarousel;
