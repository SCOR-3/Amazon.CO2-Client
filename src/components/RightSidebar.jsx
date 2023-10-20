// import Subtotal from "./Subtotal";
import tickIcon from '../assets/green-tick.png'
// import ContainsGiftCheckbox from './ContainsGiftCheckbox'

const RightSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-header">
          <img src={tickIcon} alt='Green tick icon' />
          <h5>Your order is eligible for FREE Delivery.</h5>
          <p>
            Select this option at checkout. <a>Details</a>
          </p>
        </div>
        <div className="subtotal">
          <h3>Subtotal (8 items):</h3>
          <div className="price-container">
            <span>₹</span>
            <span className="item-price">43,999</span>
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
