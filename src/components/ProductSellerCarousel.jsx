import React, { Fragment, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Chip from "@mui/material/Chip";
import { Rating } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeSelected } from "../slices/selectedSlice";

const sellerDetails = [
  {
    id: 1,
    name: "ABC Seller ABC Seller",
    price: 43999,
    carbonPoint: 5,
    rating: 3.4,
    selected: true,
  },
  {
    id: 2,
    name: "ABC Seller",
    price: 500,
    carbonPoint: 5,
    rating: 3.4,
    selected: false,
  },
  {
    id: 3,
    name: "BCA",
    price: 500,
    carbonPoint: 5,
    rating: 3.4,
    selected: false,
  },
  {
    id: 4,
    name: "ABC",
    price: 500,
    carbonPoint: 5,
    rating: 3.4,
    selected: false,
  },
  {
    id: 5,
    name: "ABC",
    price: 500,
    carbonPoint: 5,
    rating: 3.4,
    selected: false,
  },
];

const ProductSellerCarousel = () => {
  const settings = {
    autoplay: false,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    loop: false,
  };
  const [selected, setSelected] = useState();
  useEffect(() => {
    dispatch(changeSelected(sellerDetails[0]));
    setSelected(sellerDetails[0].id);
  }, []);
  const dispatch = useDispatch();
  const change = (seller) => {
    dispatch(changeSelected(seller));
    setSelected(seller.id);
  };

  return (
    <Fragment>
      <h3>Help us make Amazon green: </h3>
      <Slider {...settings}>
        {sellerDetails.map((seller) => {
          return (
            <div className="seller-slide-wrapper">
              <div
                className={
                  seller.id === selected
                    ? "selected-slide seller-slide"
                    : "seller-slide"
                }
                onClick={() => change(seller)}
              >
                <div className="seller-slide-heading">
                  <div className="seller-name-div">
                    <h2 className="seller-name">{seller.name}</h2>
                  </div>
                  <div className="carbon-point-div">
                    <span className="carbon-point-chip">
                      <i class="fa-solid fa-seedling">
                        {" "}
                        {`  ${seller.carbonPoint}`}{" "}
                      </i>
                    </span>
                  </div>
                </div>

                <Rating
                  size="small"
                  value={3.4}
                  className="seller-rating"
                  // precision={0.5}
                  readOnly
                />
                <br />
                <span className="product-price">
                  <span className="discount-percentage">-23% </span>
                  <span className="price-symbol">₹</span>
                  {seller.price}
                </span>
                <p className="mrp">
                  M.R.P: <span className="mrp-pricing">₹57,000</span>
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
