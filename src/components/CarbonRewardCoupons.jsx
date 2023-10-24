import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CarbonRewardCouponCard from "./CarbonRewardCouponCard";
import axios from "axios";
import { useSelector } from "react-redux";
const CarbonRewardCoupons = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  const [coupons, setCoupons] = useState([]);
  const getCoupons = async () => {
    try {
      const res = await axios.get(
        "https://graceful-foal-hose.cyclic.app/v1/coupons"
      );
      setCoupons(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoupons();
  }, []);

  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <div>
      <h2 className="offers-tagline"> Special Offers for Carbon Points </h2>
      <Slider {...settings}>
        {coupons.length > 0 &&
          coupons.map((coupon) => {
            return userInfo.coupons && userInfo.coupons.includes(coupon._id) ? (
              ""
            ) : (
              <CarbonRewardCouponCard key={coupon._id} coupon={coupon} />
            );
          })}
      </Slider>
    </div>
  );
};

export default CarbonRewardCoupons;
