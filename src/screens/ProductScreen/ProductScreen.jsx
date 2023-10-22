import React, { useEffect } from "react";
import "./ProductScreen.css";
import ProductImageDiv from "../../components/ProductImageDiv";
import ProductDescDiv from "../../components/ProductDescDiv";
import ProductPriceDiv from "../../components/ProductPriceDiv";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedProduct } from "../../slices/productSlice";
import axios from "axios";
import { changeSelected } from "../../slices/selectedSlice";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getProductById = async () => {
    const res = await axios.get(
      `https://real-ruby-slug-kilt.cyclic.app/v1/product/${id}/`
    );
    const product = res.data;
    // console.log(product)
    dispatch(changeSelectedProduct(product));
    dispatch(changeSelected(product.sellers[0]));
  };
  useEffect(() => {
    getProductById();
  }, []);

  const currentProduct = useSelector(
    (state) => state.product.selectedProduct
  );

  return (
    <div className="product-screen-wrapper">
      <div className="product-screen-div">
        <ProductImageDiv src={currentProduct && currentProduct.image} />
        <ProductDescDiv />
        <ProductPriceDiv />
      </div>
    </div>
  );
};

export default ProductScreen;
