import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="Images/Gymflex_Logo_1.jpg" alt="Logo" height="100" style={{ marginRight: '10px' }} />
        </Link>
        <Link className="navbar-brand" to="/"><b style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Gymflex</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link className="nav-link active" aria-current="page" to="/" style={{ fontSize: '20px' }}>Home</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/contact" style={{ fontSize: '20px' }}>Contact</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/about" style={{ fontSize: '20px' }}>About Us</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/trainers" style={{ fontSize: '20px' }}>Trainers</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/packages" style={{ fontSize: '20px' }}>Packages</Link> {/* Updated link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ fontSize: '20px' }}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup" style={{ fontSize: '20px' }}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
