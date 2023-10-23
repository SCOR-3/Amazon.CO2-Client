import { Link } from "react-router-dom";

const NavMenu = ({ image, top, bottom, carbonPoints, link }) => {
  return (
    <Link to={link}>
      <div className="nav-address">
        {image && <img src={image} alt="location-icon" />}
        <div>
          <p style={{ color: image ? undefined : "white" }}>{top}</p>
          {carbonPoints ? (
            <i class="fa-solid fa-seedling">{"  "}5</i>
          ) : (
            <h4>{bottom}</h4>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NavMenu;
