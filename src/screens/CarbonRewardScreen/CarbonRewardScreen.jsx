import React from "react";
import "./CarbonRewardScreen.css";
import CarbonRewardCard from "../../components/CarbonRewardCard";
import CarbonRewardCoupons from "../../components/CarbonRewardCoupons";
const CarbonRewardScreen = () => {
  return (
    <div className="carbon-reward-screen-wrapper">
      <div className="carbon-rewards-header">
        <CarbonRewardCard
          text={204}
          subtext={"Carbon Points"}
          logo={"fa-seedling"}
          statText={"+6.8% (+4)"}
          up
        />
        <CarbonRewardCard
          text={204}
          subtext={"Carbon Points"}
          logo={"fa-seedling"}
          statText={"+6.8% (+4)"}
          down
        />
        <CarbonRewardCard
          text={204}
          subtext={"Carbon Points"}
          logo={"fa-seedling"}
          statText={"+6.8% (+4)"}
          up
        />
        <CarbonRewardCard
          text={204}
          subtext={"Carbon Points"}
          logo={"fa-seedling"}
          statText={"+6.8% (+4)"}
          up
        />
      </div>
      <div className="carbon-rewards-coupon-wrapper">
        <CarbonRewardCoupons/>
      </div>
    </div>
  );
};

export default CarbonRewardScreen;
