import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dropIcon from "../assets/down-arrow.png";
import { changeCreditQuantity } from "../slices/cartSlice";

const creditQuant = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5];

const CreditQuantity = ({ id }) => {
  const quantity = useSelector(
    (store) => store.cart.cartItems.find((item) => item._id == id).quantity
  );
  const dispatch = useDispatch();

  const [popup, setPopup] = useState(false);
  const [upwards, setUpwards] = useState(false);

  useEffect(() => {
    if (popup) {
      document.addEventListener("click", closePopup);
    } else {
      document.removeEventListener("click", closePopup);
    }

    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, [popup]);

  const quantityRef = useRef(null);
  const wrapper = useRef(null);

  const closePopup = (event) => {
    if (
      wrapper.current &&
      !wrapper.current.contains(event.target) &&
      !event.target.className.includes("popper-button")
    ) {
      setPopup(false);
    }
  };

  const openPopup = (event) => {
    const dimensions = quantityRef.current.getBoundingClientRect();

    dimensions.top > 262 ? setUpwards(true) : setUpwards(false);

    if (event.target.className.includes("popper-button")) {
      setPopup(true);
    }
  };

  function locate() {
    if (popup) {
      if (upwards) {
        return "select-quantity open-upwards";
      }
      return "select-quantity";
    }

    return "select-quantity hidden";
  }

  return (
    <div
      className="item-quantity popper-button"
      onClick={(event) => openPopup(event)}
      ref={quantityRef}
    >
      <p className="popper-button">
        Qty: <span className="popper-button">{quantity}</span>
      </p>
      <img src={dropIcon} className="popper-button" alt="dropdown-arrow" />
      <ul className={locate()} ref={wrapper}>
        {creditQuant.map((quant, index) => (
          <li
            key={index}
            className={quantity == quant ? "current-quantity" : undefined}
            onClick={() => {
              setPopup(false);
              dispatch(changeCreditQuantity({ id, quantity: quant }));
            }}
          >
            {quant}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreditQuantity;
