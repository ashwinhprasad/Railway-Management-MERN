import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Trains from "./components/Trains/Trains";
import TrainDetail from "./components/Trains/TrainDetail";
import Login from "./components/User/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { check } from "./actions/user";
import Cookies from "js-cookie";

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

      <Route path="/train/:id" component={TrainDetail} />
    </Router>
  );
};

export default App;
