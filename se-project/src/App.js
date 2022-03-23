import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Login/Dashboard";
import AboutUs from "./components/About/AboutUs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route exact path="Login_Student" element={<Login />} />
          <Route exact path="SignUp" element={<SignUp />} />
          <Route exact path="Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
