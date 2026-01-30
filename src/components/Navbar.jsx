import React from 'react';
import './Navbar.css';
import { FaWaterLadder, FaBars, FaTimes } from 'react-icons/fa6';

const Navbar = ({ isLoggedIn, onLogout, currentUser }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <FaWaterLadder className="logo-icon" />
            <span className="logo-text">Gulfoss Enterprises</span>
          </div>

          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li>
              <a href="/" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="/about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>

            {isLoggedIn ? (
              <>
                <li className="dropdown">
                  <span className="dropdown-toggle">{currentUser?.name || 'Account'}</span>
                  <div className="dropdown-menu">
                    <a href="/profile">Profile</a>
                    <a href="/orders">My Orders</a>
                    <a href="/subscriptions">My Subscriptions</a>
                    <hr />
                    <button className="logout-btn" onClick={onLogout}>Logout</button>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/login" className="nav-link-btn">Login</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
