import React from "react";
import { NavLink } from 'react-router-dom'; // Import NavLink

function Header() {
  // Function to add 'active' class based on matching path
  const setActiveClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <img src="Images/Gymflex_Logo_1.jpg" alt="Logo" height="100" style={{ marginRight: '10px' }} />
        </NavLink>
        <NavLink className="navbar-brand" to="/home"><b style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Gymflex</b></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/home" end style={{ fontSize: '20px' }}>Home</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/contact" style={{ fontSize: '20px' }}>Contact</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/about" style={{ fontSize: '20px' }}>About Us</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/trainers" style={{ fontSize: '20px' }}>Trainers</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/packages" style={{ fontSize: '20px' }}>Packages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={setActiveClass} to="/login" style={{ fontSize: '20px' }}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={setActiveClass} to="/signup" style={{ fontSize: '20px' }}>Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
