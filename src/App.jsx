import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductScreen from "./screens/ProductScreen/ProductScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <ProductScreen/>
    </Fragment>
  );
}

export default App;
