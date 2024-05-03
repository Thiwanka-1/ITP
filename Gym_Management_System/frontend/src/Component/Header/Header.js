import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthContext';

function Header() {
  const { user, logout } = useContext(AuthContext); // Get user and logout function from context

  const setActiveClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="/Images/Gymflex_Logo_1.jpg" alt="Logo" height="100" style={{ marginRight: '10px' }} />
        </NavLink>
        <NavLink className="navbar-brand" to="/">
          <b style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Gymflex</b>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/" end style={{ fontSize: '20px' }}>Home</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/contact" style={{ fontSize: '20px' }}>Contact</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/about" style={{ fontSize: '20px' }}>About Us</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/Trainers" style={{ fontSize: '20px' }}>Trainers</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={setActiveClass} to="/packages" style={{ fontSize: '20px' }}>Packages</NavLink>
            </li>
            
            {user ? ( // If user is logged in, show dashboard link with name and logout option
              <>
                <li className="nav-item me-3">
                  <NavLink className={setActiveClass} to="/dash" style={{ fontSize: '20px' }}>
                    {user.username}'s Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-link nav-link" style={{ fontSize: '20px', color: '#ffffff' }}>
                    Logout
                  </button>
                </li>
              </>
            ) : ( // If not logged in, show Login and Sign Up links
              <>
                <li className="nav-item me-3">
                  <NavLink className={setActiveClass} to="/login" style={{ fontSize: '20px' }}>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={setActiveClass} to="/signup" style={{ fontSize: '20px' }}>Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
