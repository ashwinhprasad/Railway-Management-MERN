//import {} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import { useEffect } from "react";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const login = () => {
    if (!user.name) {
      return (
        <Link id="link" to="/login">
          Login
        </Link>
      );
    } else {
      return (
        <div>
          <Link id="link" to="/logout">
            Logout
          </Link>
          <p id="username">
            Hey{" "}
            <Link id="link" to="/profile">
              {user.name}
            </Link>
          </p>
        </div>
      );
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Home Link */}
        <Link id="link" to="/">
          Home
        </Link>

        {login()}
      </div>
      <div className="lowerDesign"></div>
    </div>
  );
};

export default Navbar;
