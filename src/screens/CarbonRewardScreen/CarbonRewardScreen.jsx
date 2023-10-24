import React from "react";
import "./CarbonRewardScreen.css";
import CarbonRewardCard from "../../components/CarbonRewardCard";
import CarbonRewardCoupons from "../../components/CarbonRewardCoupons";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import CarbonCreditCard from "../../components/CarbonCreditCard";
import CarbonProjects from "../../components/CarbonProjects";
import { useSelector } from "react-redux";
const CarbonRewardScreen = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <div className="carbon-reward-screen-wrapper">
      <div className="carbon-rewards-header">
        <CarbonRewardCard
          text={userInfo.carbonPoints}
          subtext={"Carbon Points"}
          logo={"fa-seedling"}
          statText={"+6.8% (+4)"}
          up
        />
        <CarbonRewardCard
          text={"4.6"}
          subtext={"Your Carbon Rating"}
          logo={"fa-star"}
          statText={"+6.8% (+4)"}
          down
        />
        <CarbonRewardCard
          text={userInfo.carbon_credits}
          subtext={"Your Carbon Credits"}
          logo={"fa-coins"}
          statText={"+6.8% (+4)"}
          up
        />
        <CarbonRewardCard
          text={userInfo.coupons.length}
          subtext={"Coupons Collected"}
          logo={"fa-tags"}
          statText={"+6.8% (+4)"}
          up
        />
      </div>
      <Accordion id="carbon-accordion">
        <AccordionSummary
          expandIcon={<i class="fa-solid fa-angle-down" />}
          // aria-controls="panel1a-content"
          id="about-carbon-points-header"
        >
          <p>What are Carbon Points ?</p>
        </AccordionSummary>
        <AccordionDetails id="carbon-accordion-details">
          <p>
            A loyalty reward point system based on the carbon footprint of the sellers 
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion id="carbon-accordion">
        <AccordionSummary
          expandIcon={<i class="fa-solid fa-angle-down" />}
          // aria-controls="panel1a-content"
          id="about-carbon-points-header"
        >
          <p>What is my Carbon Rating ?</p>
        </AccordionSummary>
        <AccordionDetails id="carbon-accordion-details">
          <p>
            Your carbon rating defines how environmentally friendly your Amazon
            order history is. It also considers your environmental contribution
            in the form of carbon credits.
          </p>
        </AccordionDetails>
      </Accordion>
      <div className="carbon-rewards-coupon-wrapper">
        <CarbonRewardCoupons />
      </div>
      <br />
      <br />
      <br />
      <hr />
      <CarbonProjects />
    </div>
  );
};

export default CarbonRewardScreen;
