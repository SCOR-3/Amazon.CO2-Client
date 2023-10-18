import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Provider store={store}>
        <ProductScreen />
      </Provider>
    </Fragment>
  );
}

export default App;
