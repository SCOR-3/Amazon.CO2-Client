import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateBill,
  toggleCarbonNeutralDelivery,
} from "../slices/cartSlice";

const CarbonNeutralCheckBox = () => {
  const isCarbonNeutralDelivery = useSelector(
    (store) => store.cart.isCarbonNeutralDelivery
  );
  const dispatch = useDispatch();
  return (
    <div className="carbon-neutral-delivery-checkbox">
      <input
        type="checkbox"
        value={isCarbonNeutralDelivery}
        checked={isCarbonNeutralDelivery}
        onChange={() => {
          dispatch(toggleCarbonNeutralDelivery());
          dispatch(calculateBill());
        }}
      />
      <label>Opt for <span>Carbon Neutral Delivery</span></label>
    </div>
  );
};

export default CarbonNeutralCheckBox;
