import { Grid } from "@mui/material";
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

  const [carbonProjects, setCarbonProjects] = useState([])
  const getCarbonProjects = async() => {
    const res = await axios.get("https://graceful-foal-hose.cyclic.app/v1/carbonMarkets");
    setCarbonProjects(res.data)
  }
  
  useEffect(()=>{
    getCarbonProjects()
  }, [])
  console.log(carbonProjects)
  return (
    <div className="carbon-credits-div">
      <h1 className="carbon-credits-div-title">
        We are doing our best to make this Earth a better place
      </h1>

      <h1 className="carbon-credits-div-title">
        Here's how you can contribute
      </h1>

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
