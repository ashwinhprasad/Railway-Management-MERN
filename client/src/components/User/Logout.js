import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div>
      <h1>Logout Success</h1>
    </div>
  );
}
