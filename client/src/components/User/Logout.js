import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import "./Logout.css";

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="logout-container">
      <h1 id="logout-message">Logout Success</h1>
    </div>
  );
}
