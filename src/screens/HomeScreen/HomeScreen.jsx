import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "./HomeScreen.css";
import axios from "axios";

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
  console.log(products);
  return (
    <Fragment>
      {products.length > 0 ? (
        <div className="home">
          <div className="home-container">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              className="home-image"
            />

            <div className="home-row">
              <ProductCard
                id={products[0]._id} 
                title={products[0].name || "abcd"}
                price={products[0].sellers[0].price}
                image={products[0].image}
                rating={products[0].sellers[0].rating}
                author={products[0].sellers[0].name}
                subtitle={products[0].description}
              />
              <ProductCard
                id={products[1]._id} 
                title={products[1].name || "abcd"}
                price={products[1].sellers[0].price}
                image={products[1].image}
                rating={products[1].sellers[0].rating}
                author={products[1].sellers[0].name}
                subtitle={products[1].description}
              />
            </div>

            <div className="home-row">
              <ProductCard
                 id={products[2]._id} 
                 title={products[2].name || "abcd"}
                 price={products[2].sellers[0].price}
                 image={products[2].image}
                 rating={products[2].sellers[0].rating}
                 author={products[2].sellers[0].name}
                 subtitle={products[2].description}
              />
              <ProductCard
                 id={products[3]._id} 
                 title={products[3].name || "abcd"}
                 price={products[3].sellers[0].price}
                 image={products[3].image}
                 rating={products[3].sellers[0].rating}
                 author={products[3].sellers[0].name}
                 subtitle={products[3].description}
              />
              <ProductCard
                id={products[4]._id} 
                title={products[4].name || "abcd"}
                price={products[4].sellers[0].price}
                image={products[4].image}
                rating={products[4].sellers[0].rating}
                author={products[4].sellers[0].name}
                subtitle={products[4].description}
              />
            </div>

            <div className="home-row">
              <ProductCard
                  id={products[5]._id} 
                  title={products[5].name || "abcd"}
                  price={products[5].sellers[0].price}
                  image={products[5].image}
                  rating={products[5].sellers[0].rating}
                  author={products[5].sellers[0].name}
                  subtitle={products[5].description}
              />
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default HomeScreen;
