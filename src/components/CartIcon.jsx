import { useSelector } from "react-redux";
import cartIcon from "../assets/cart-icon.png";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const itemsCount = useSelector((state) => state.cart.itemsCount);

  return (
    <Link to="/checkout">
      <div className="cart-icon">
        <h4 className={itemsCount > 9 ? "down-size" : undefined}>
          {itemsCount}
        </h4>
        <img src={cartIcon} alt="cart-icon" />
        <p>Cart</p>
      </div>
    </Link>
  );
};

export default CartIcon;
