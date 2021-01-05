import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar */}
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
