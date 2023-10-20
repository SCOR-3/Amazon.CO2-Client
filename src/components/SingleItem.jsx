// import ItemPrice from "./ItemPrice";
import fulfilledIcon from "../assets/amazon-fulfilled.png";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { removeItem, saveForLater } from "../features/cart/cartSlice";
// import IsGiftCheckbox from "./IsGiftCheckbox";
import ItemQuantity from "./ItemQuantity";
import { Chip } from "@mui/material";
// import ItemDeleted from "./ItemDeleted";
// import BestSeller from "./BestSeller";
// import ItemDescription from "./ItemDescription";

const SingleItem = ({ product }) => {
  const {
    id,
    name,
    image,
    seller,
    type,
    carbon_rating,
    countInStock,
    category,
    description,
    saved,
  } = product;

  const dispatch = useDispatch();

  return (
    // quantity ? (
    <div className="single-item">
      <img src={image} alt="item-image" />
      <div>
        <h3 className="item-title">{name}</h3>
        <div className="cart-carbon-point-chip-div">
          <span className="cart-carbon-point-chip">
            <i className="fa-solid fa-seedling"> 5</i>
          </span>
        </div>

        {/* {author && <p className="item-author">by {author}</p>} */}
        <div className="price-container">
          <span>₹</span>
          <span className="item-price">{seller.price}</span>
          <span>00</span>
        </div>

        {/* <BestSeller category={category} /> */}
        {type && <p className="item-type">{type}</p>}
        <p className="item-remaining">In stock</p>
        {seller.price > 499 && (
          <p className="item-shipping">Eligible for FREE Shipping</p>
        )}
        <img src={fulfilledIcon} alt="Amazon fulfilled icon" />

        {/* <IsGiftCheckbox id={id} /> */}

        {/* <ItemDescription description={description} /> */}
        <div className="item-controllers">
          <ItemQuantity id={id} />
          <h4
          // onClick={() => dispatch(removeItem(id))}
          >
            Delete
          </h4>
          <h4
          // onClick={() => dispatch(saveForLater(id))}
          >
            Save for later
          </h4>
          <h4>See more like this</h4>
        </div>
      </div>
    </div>
  );
  // ) : (
  //   <ItemDeleted title={title} saved={saved} />
  // );
};

export default SingleItem;
