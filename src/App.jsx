import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
// import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartScreen from "./screens/CartScreen/CartScreen";
import CarbonRewardScreen from "./screens/CarbonRewardScreen/CarbonRewardScreen";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />\
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/checkout" element={<CartScreen />} />
            <Route path="/carbonrewards" element={<CarbonRewardScreen />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
