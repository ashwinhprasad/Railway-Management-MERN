import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Trains from "./components/Trains/Trains";
import Login from "./components/User/Login";
import { useEffect } from "react";
import Logout from "./components/User/Logout";
import { useDispatch } from "react-redux";
import { check } from "./actions/user";
import Cookies from "js-cookie";
import Profile from "./components/Profile/Profile";

const App = () => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(check());
    } else {
      console.log("you are not logged in");
    }
  });

  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Train List */}
      <Route exact path="/">
        <Trains />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/logout">
        <Logout />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>
    </Router>
  );
};

export default App;
