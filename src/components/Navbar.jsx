import Header from "./Header";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import logo from "../assets/amazon-logo.png";
import locationIcon from "../assets/location-icon.png";
import flagIcon from "../assets/india-flag.png";
import CartIcon from "./CartIcon";
import { Link } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link href="/">
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
        <NavMenu
          image={false}
          top={"Carbon Points"}
          bottom={"Account & Lists"}
          link={"/carbonrewards"}
          carbonPoints
        />
        <NavMenu image={false} top={"Returns"} bottom={"& Orders"} />
        <CartIcon />
      </div>
      <Header />
    </>
  );
};

export default Navbar;
