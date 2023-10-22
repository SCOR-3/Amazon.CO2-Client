// import Subtotal from "./Subtotal";
import { useDispatch, useSelector } from "react-redux";
import tickIcon from "../assets/green-tick.png";
// import ContainsGiftCheckbox from './ContainsGiftCheckbox'

const RightSidebar = () => {
  const cart = useSelector((store) => store.cart);
  const itemsCount = cart && cart.itemsCount;
  const bill = cart && cart.bill;
  const carbonPoints = cart && cart.carbonPoints;
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-header">
          <img src={tickIcon} alt="Green tick icon" />
          <h5>Your order is eligible for FREE Delivery.</h5>
          <p>
            Select this option at checkout. <a>Details</a>
          </p>
        </div>
        <div className="subtotal">
          <h3>Carbon Points:</h3>
          <div className="price-container">
            <i className="fa-solid fa-seedling"></i>  
            <span className="item-price">{carbonPoints}</span>
          </div>
        </div>
        <div className="subtotal">
          <h3>Subtotal ({itemsCount} items):</h3>
          <div className="price-container">
            <span>₹</span>
            <span className="item-price">{bill}</span>
            <span>00</span>
          </div>
        </div>
        {/* <ContainsGiftCheckbox /> */}
        <button className="proceed-buy">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default RightSidebar;
