//import {} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Home Link */}
        <Link id="link" to="/">
          Home
        </Link>

        {/* browse Link */}
        <Link id="link" to="/browse">
          browse
        </Link>

        {/* login Link */}
        <Link id="link" to="/login">
          Login
        </Link>
      </div>
      <div className="lowerDesign"></div>
    </div>
  );
};

export default Navbar;
