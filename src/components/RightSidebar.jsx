// import Subtotal from "./Subtotal";
import { useDispatch, useSelector } from "react-redux";
import tickIcon from "../assets/green-tick.png";
import { Fragment } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import CarbonNeutralDeliveryCheckBox from "./CarbonNeutralDeliveryCheckBox";
import { buyProducts } from "../slices/userSlice";
import { clearCart } from "../slices/cartSlice";

const RightSidebar = () => {
  const userInfo = useSelector((store)=>store.user.userInfo)
  const cart = useSelector((store) => store.cart);
  const itemsCount = cart && cart.itemsCount;
  const bill = cart && cart.bill;
  const carbonPoints = cart && cart.carbonPoints;
  const isCarbonNeutralDelivery = cart.isCarbonNeutralDelivery;
  const dispatch = useDispatch();
  const buy = () => {
    let carbonCredits = userInfo.carbon_credits;
    cart.cartItems.map((item) => {
      if (item.type === "Carbon") {
        carbonCredits += item.quantity;
      }
    });
    let carbonPoints = cart.carbonPoints + userInfo.carbonPoints;

    dispatch(buyProducts({userId: userInfo._id, carbonCredits, carbonPoints}));
    dispatch(clearCart())
  };

  return (
    <div>
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
              <span className="item-price">{carbonPoints} </span>{" "}
              {isCarbonNeutralDelivery ? " (+2/item)" : ""}
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
          <CarbonNeutralDeliveryCheckBox />
          <button className="proceed-buy" onClick={() => buy()}>
            Proceed to Buy
          </button>
        </div>
      </div>
      <br />
      <div className="sidebar">
        <Accordion className="sidebar-container-2">
          <AccordionSummary expandIcon={<i class="fa-solid fa-angle-down" />}>
            <p>What is Carbon Neutral Delivery ?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default RightSidebar;
