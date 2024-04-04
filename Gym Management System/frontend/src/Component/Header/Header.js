import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Add logo image */}
        <a className="navbar-brand" href="#">
          {/* Increase the height of the logo and add some margin to separate it from the brand name */}
          <img src="Images/Gymflex_Logo_1.jpg" alt="Logo" height="100" style={{ marginRight: '10px' }} />
        </a>
        {/* Increase the font size and weight of the Gymflex brand name */}
        <a className="navbar-brand" href="#"><b style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Gymflex</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Increase the font size of the navigation links */}
            <li className="nav-item me-3">
              <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '20px' }}>Home</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#" style={{ fontSize: '20px' }}>Contact</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#" style={{ fontSize: '20px' }}>About Us</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#" style={{ fontSize: '20px' }}>Trainers</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#" style={{ fontSize: '20px' }}>Packages</a>
            </li>
            {/* Change Login and Sign Up links to buttons */}
            <li className="nav-item">
              <a className="nav-link" href="/login" style={{ fontSize: '20px' }}>Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup" style={{ fontSize: '20px' }}>Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
