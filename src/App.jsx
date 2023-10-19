import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <ProductScreen />
        {/* <HomeScreen /> */}
      </Provider>
    </div>
  );
}

export default App;
