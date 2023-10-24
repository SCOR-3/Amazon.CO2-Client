import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "./HomeScreen.css";
import axios from "axios";
import { Grid } from "@mui/material";
import HomeProductCard from "../../components/HomeProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get(
      "https://graceful-foal-hose.cyclic.app/v1/product/"
    );
    setProducts(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Fragment>
      {products.length > 0 ? (
        <div className="home">
          <div className="home-container">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              className="home-image"
            />
            <Grid
              container

              columns = {10}
              rowSpacing={1}
              // columnSpacing={{ xs: 2}}
            >
              {products &&
                products.map((product) => {
                  return (
                    <Grid item xs={2} key={product._id}>
                      <HomeProductCard product={product}/>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default HomeScreen;
