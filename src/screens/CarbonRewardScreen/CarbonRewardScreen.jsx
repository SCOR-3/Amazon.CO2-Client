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
const CarbonRewardScreen = () => {
  return (
    <div className="carbon-reward-screen-wrapper">
      <div className="carbon-rewards-header">
        <CarbonRewardCard
          text={"204"}
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
          text={"12 mCO2"}
          subtext={"CO2 emissions saved"}
          logo={"fa-temperature-arrow-down"}
          statText={"+6.8% (+4)"}
          up
        />
        <CarbonRewardCard
          text={"24 mCO2"}
          subtext={"Your CO2 Emissions"}
          logo={"fa-fire"}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
      <CarbonProjects/>
    </div>
  );
};

export default CarbonRewardScreen;
