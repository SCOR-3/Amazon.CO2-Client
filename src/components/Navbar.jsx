import Header from "./Header";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import logo from "../assets/amazon-logo.png";
import locationIcon from "../assets/location-icon.png";
import flagIcon from "../assets/india-flag.png";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <Fragment>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="amazon-logo" />
            <p>.in</p>
          </div>
        </Link>
        <NavMenu
          image={locationIcon}
          top={"Hello"}
          bottom={"Select your address"}
        />
        <SearchBar />
        <div className="flag-icon">
          <img src={flagIcon} alt="india-flag" />
        </div>
        {isAuth ? (
          <NavMenu
            image={false}
            top={"Carbon Points"}
            link={"/carbon"}
            carbonPoints
          />
        ) : (
          <NavMenu image={false} top={"Sign in for"} bottom={"Carbon"} link={"/auth"}/>
        )}

        <NavMenu image={false} top={"Returns"} bottom={"& Orders"} />
        <CartIcon />
      </div>
      <Header />
    </Fragment>
  );
};

export default Navbar;
