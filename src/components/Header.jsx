import React from "react";
import amazonLogo from "../assets/amazon-logo-main.png";
const Header = () => {
  return (
    <div className="header">
      <img src={amazonLogo} className="header-logo" />
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <i class="fa-solid fa-magnifying-glass header-search-icon"></i>
      </div>

      <div className="header-nav">
        <div className=" header-option-main">
          <span className="header-option-one">Hello, Guest</span>
          <span className="header-option-two">Sign In</span>
        </div>

        <div className="header-option">
          <span className="header-option-one">Returns</span>
          <span className="header-option-two">& Orders</span>
        </div>

        <div className="header-option">
          <span className="header-option-one">Your</span>
          <span className="header-option-two">Prime</span>
        </div>
      </div>

      {/* <Link to="/checkout" className="link"> */}
      <div className="header-option-basket">
        <i class="fa-solid fa-cart-shopping header-basket-icon"></i>
        <span className="header-option-two header-basket-count">
          {/* {basket?.length} */}
        </span>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Header;
