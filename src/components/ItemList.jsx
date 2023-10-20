import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {calculateBill} from "../slices/cartSlice"
import SingleItem from "./SingleItem";

const products = [
  {
    id: 1,
    name: "LG 21:9 Curved UltraWide ¢ QHD IPS Monitor 86.42 cm (34 Inch), QHD 3440x 1440, HDR 10, sRGB 99% (Typ.),DP, HDMI, USB Type-C ¢, LAN (RJ45) Port,Speaker, Headphone Out, Height Adjust Stand, 34WQ75C",

    image: "https://m.media-amazon.com/images/I/61ZXfJDT+1L._SX522_.jpg",
    brand: "ABC",
    category: "ABC",
    description: "ABC",
    carbon_rating: 5,
    numReviews: 5,
    seller: {
      price: 43999,
      name: "ABC",
      carbonRating: 5,
    },
    countInStock: 5,
  },
  {
    id: 2,
    name: "ABC",
    image: "https://congerpe.sirv.com/Images/boat-smartwatch.jpg",
    brand: "ABC",
    category: "ABC",
    description: "ABC",
    carbon_rating: 5,
    numReviews: 5,
    seller: {
      price: 43999,
      name: "ABC",
      carbonRating: 5,
    },
    countInStock: 5,
  },
];

const ItemList = () => {
    const itemQuantities = useSelector(
      (store) => store.cart.cartItems.map((item) => item.quantity),
      shallowEqual
    );
    // const products = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

    useEffect(() => {
    //   dispatch(evaluateGifts());
      dispatch(calculateBill());
    }, [itemQuantities]);

  const cartEmpty = products.length == 0;

  return (
    <div className="items">
      <h2>{cartEmpty ? "Your Amazon Cart is empty." : "Shopping Cart"}</h2>
      {/* <h2>Shopping Cart</h2> */}
      <div className="items-list">
        {products.map((product, index) => (
          <SingleItem key={index} product={product} />
        ))}
      </div>
      <div className="subtotal">
        <h3>Subtotal (9 items):</h3>
        <div className="price-container">
          <span>₹</span>
          <span className="item-price">43,999</span>
          <span>00</span>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
