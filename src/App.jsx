import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
// import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartScreen from "./screens/CartScreen/CartScreen";
import CarbonRewardScreen from "./screens/CarbonRewardScreen/CarbonRewardScreen";
import AuthScreen from "./screens/AuthScreen/AuthScreen";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomeScreen />} />\
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/checkout" element={<CartScreen />} />
              <Route path="/carbon" element={<CarbonRewardScreen />} />
              <Route path="/auth" element={<AuthScreen />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
