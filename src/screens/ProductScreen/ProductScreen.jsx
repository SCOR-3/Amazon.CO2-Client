import React, { useEffect } from "react";
import "./ProductScreen.css";
import ProductImageDiv from "../../components/ProductImageDiv";
import ProductDescDiv from "../../components/ProductDescDiv";
import ProductPriceDiv from "../../components/ProductPriceDiv";
import {useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeSelectedProduct } from "../../slices/productSlice";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    // dispatch(changeSelectedProduct())
  })
  console.log(id)

  return (
    <div className="product-screen-wrapper">
      <div className="product-screen-div">
        <ProductImageDiv
          src={"https://m.media-amazon.com/images/I/61ZXfJDT+1L._SX522_.jpg"}
        />
        <ProductDescDiv />
        <ProductPriceDiv />
      </div>
    </div>
  );
};

export default ProductScreen;
