import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "./HomeScreen.css";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get(
      "https://real-ruby-slug-kilt.cyclic.app/v1/product/"
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
                id={122323}
                title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                price={364.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                rating={4}
                author="by Acer"
              />
            </div>

            <div className="home-row">
              <ProductCard
                id={122325}
                title="SAMSUNG 75-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q70TAFXZA, 2020 Model)"
                price={100.29}
                image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SL1000_.jpg"
                rating={4}
                author="by Samsung"
              />
              <ProductCard
                id={122326}
                title="OtterBox Defender Series Case for iPad Pro 11(1st Gen) - Retail Packaging - Black"
                price={11.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51o%2ByhvbK-L._AC_SL1000_.jpg"
                rating={5}
                author="by OtterBox Store"
                subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus"
              />
              <ProductCard
                id={122321}
                title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
                price={9.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
                rating={3}
                author="by Samsung Electronics Store"
                subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
              />
            </div>

            <div className="home-row">
              <ProductCard
                id={122327}
                title="LG 65UN7300PUF Alexa Built-In UHD 73 Series 65 4K Smart UHD TV (2020"
                price={300.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg"
                rating={5}
                author="by LG Store"
                subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
              />
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default HomeScreen;
