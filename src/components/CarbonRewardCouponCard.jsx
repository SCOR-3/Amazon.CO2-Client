import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCoupon } from "../slices/userSlice";

const CarbonRewardCouponCard = ({ coupon }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const buy = () => {
    dispatch(
      buyCoupon({
        userId: userInfo._id,
        couponId: coupon._id,
        carbonPoints:
          parseInt(userInfo.carbonPoints) - parseInt(coupon.pointsRequired),
      })
    );
  };

  return (
    <div className="carbon-reward-coupon-card">
      <img src={coupon.image} />
      <p className="coupon-offer">{coupon.name}</p>
      <p className="coupon-product">{coupon.title}</p>
      <button onClick={() => buy()}>
        <i className="fa-solid fa-seedling"> {coupon.pointsRequired}</i>
      </button>
    </div>
  );
};

export default CarbonRewardCouponCard;
