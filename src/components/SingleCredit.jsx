// import ItemPrice from "./ItemPrice";
import fulfilledIcon from "../assets/amazon-fulfilled.png";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { removeItem, saveForLater } from "../features/cart/cartSlice";
import { Chip } from "@mui/material";
import CreditQuantity from "./CreditQuantity";


const SingleCredit = ({ credit }) => {
  const { _id, title, image, price, label, location } = credit;

  const dispatch = useDispatch();

  return (
    // quantity ? (
    <div className="single-item">
      <img src={image} alt="item-image" className="single-credit-img"/>
      <div>
        <h3 className="item-title">{title}</h3>
        <div className="cart-carbon-point-chip-div">
          <span className="cart-carbon-point-chip">
            {/* <i className="fa-solid fa-seedling">
              {" "}
              {selectedSeller.carbon_points}
            </i> */}
            {label}
          </span>
        </div>
        <div className="price-container">
          <span>₹</span>
          <span className="item-price">{price}</span>
          <span>00</span>
        </div>
        <p className="item-type">Carbon Credit</p>
        <p className="item-remaining">In stock</p>
        
        <img src={fulfilledIcon} alt="Amazon fulfilled icon" />

        <div className="item-controllers">
          <CreditQuantity id={_id} />
          <h4
          // onClick={() => dispatch(removeItem(id))}
          >
            Delete
          </h4>
          <h4>Save for later</h4>
          <h4>See more like this</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleCredit;
