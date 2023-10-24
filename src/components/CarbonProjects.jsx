import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CarbonCreditCard from "./CarbonCreditCard";
import axios from "axios";

const carbonProjects = [
  {
    _id: 1,
    image: "https://picsum.photos/200/200",
    title: "Green Belt",
    location: "Delhi NCR",
    price: 260,
    label: "Carbon Removal",
  },
  {
    _id: 2,
    image: "https://picsum.photos/200/200",
    title: "Composting",
    location: "Bengaluru, Karnataka",
    price: 320,
    label: "Waste Management",
  },
];

const CarbonProjects = () => {
  const [carbonProjects, setCarbonProjects] = useState([]);
  const getCarbonProjects = async () => {
    const res = await axios.get(
      "https://graceful-foal-hose.cyclic.app/v1/carbonMarkets"
    );
    setCarbonProjects(res.data);
  };

  useEffect(() => {
    getCarbonProjects();
  }, []);
  console.log(carbonProjects);
  return (
    <div className="carbon-credits-div">
      <h1 className="carbon-credits-div-title">
        We are doing our best to make this <span>Earth</span> a better place.
        <br />
        Here's how <span>you</span> can contribute:
      </h1>
      <Accordion id="carbon-accordion">
        <AccordionSummary
          expandIcon={<i class="fa-solid fa-angle-down" />}
          // aria-controls="panel1a-content"
          id="about-carbon-points-header"
        >
          <p>What are Carbon Credits ?</p>
        </AccordionSummary>
        <AccordionDetails id="carbon-accordion-details">
          <p>
            Carbon credits, also known as carbon offsets, are a way to reduce or
            compensate for the emission of greenhouse gases, such as carbon
            dioxide (CO2), which contribute to climate change.
            <br />
            Carbon credits are like certificates that show someone did something
            good for the environment to make up for the greenhouse gases they
            released. These certificates can be bought and sold, and they help
            balance emissions to fight climate change.
          </p>
        </AccordionDetails>
      </Accordion>
      {/* 
      <h1  className="carbon-credits-div-title">
        
      </h1> */}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {carbonProjects.length > 0 &&
          carbonProjects.map((project) => {
            return (
              <Grid item xs={3} key={project._id}>
                <CarbonCreditCard project={project} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default CarbonProjects;
