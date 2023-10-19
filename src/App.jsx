import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen/>} />\
            <Route path="/product/:id" element={<ProductScreen/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
