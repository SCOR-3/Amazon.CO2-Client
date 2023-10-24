import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavMenu = ({ image, top, bottom, carbonPoints, link }) => {
  const carbon_points = useSelector((state)=>state.user.userInfo.carbonPoints)
  return (
    <Link to={link}>
      <div className="nav-address">
        {image && <img src={image} alt="location-icon" />}
        <div>
          <p style={{ color: image ? undefined : "white" }}>{top}</p>
          {carbonPoints ? (
            <i class="fa-solid fa-seedling">{"  "}{carbon_points}</i>
          ) : (
            <h4>{bottom}</h4>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NavMenu;
