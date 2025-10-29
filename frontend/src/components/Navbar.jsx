import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">TaskHive</h1>
        <div className="navbar-links">
          <Link to="/home">Dashboard</Link>
          <Link to="/login">Logout</Link>
          <Link to="/task">Task</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
