import Header from "./Header";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import logo from "../assets/amazon-logo.png";
import locationIcon from "../assets/location-icon.png";
import flagIcon from "../assets/india-flag.png";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <div className={scroll ? "fixed-pos" : ""}>
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
          <NavMenu
            image={false}
            top={"Sign in for"}
            bottom={"Carbon"}
            link={"/auth"}
          />
        )}

        <NavMenu image={false} top={"Returns"} bottom={"& Orders"} />
        <CartIcon />
      </div>
      <Header />
    </div>
  );
};

export default Navbar;
