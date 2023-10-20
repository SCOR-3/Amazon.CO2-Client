import React from "react";
import ItemList from "../../components/ItemList";
import RightSidebar from "../../components/RightSidebar";
import "./CartScreen.css"
const CartScreen = () => {
  return (
    <div className="item-container">
      <div className="column-left">
        <ItemList />
        {/* <Saved /> */}
      </div>
      <RightSidebar />
    </div>
  );
};

export default CartScreen;
