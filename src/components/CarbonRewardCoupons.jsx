import React from "react";
import Slider from "react-slick";
import CarbonRewardCouponCard from "./CarbonRewardCouponCard";
const CarbonRewardCoupons = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div>
      <h2 className="offers-tagline"> Special Offers for Carbon Points </h2>
      <Slider {...settings}>
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
        <CarbonRewardCouponCard />
      </Slider>
    </div>
  );
};

export default CarbonRewardCoupons;
