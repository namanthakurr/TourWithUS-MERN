import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function NAveeeee() {
  const [menuActive, setMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleLogout = async () => {
    try {
      await axios.get('/api/logout');
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate('/');
      setMenuActive(false); // Close menu after logout
    } catch (err) {
      console.error('Error during logout:', err);
    }
  };

  const closeMenuOnClick = () => {
    setMenuActive(false); // Close the menu after clicking a link
  };

  return (
    <>
      <div className="navbar-container">
        <nav>
<<<<<<< Updated upstream
          <Link to="/" onClick={closeMenuOnClick}>
            <img src='/images/tour-with-us_logo.png' alt='TourLogo' className='tourlogo' />
          </Link>
          <div className={`navbar-links ${menuActive ? 'open' : ''}`}>
            <Link to="/" onClick={closeMenuOnClick}>
              <p className='nav-item'>Home</p>
=======
          <div className="hamburger" onClick={toggleMenu}>
            <p>🛩️</p>
          </div>
          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <img src='/images/TourLogo.png' alt='hanbde' className='tourlogo'/>
            <Link to="/">
              <p className='nav-item' style={{marginTop:"10px"}}>Home</p>
>>>>>>> Stashed changes
            </Link>
            <div className="nav-item dropdown">
              <p>North</p>
              <div className="dropdown-content">
                <Link to='/ladakh' onClick={closeMenuOnClick}><p>Ladakh</p></Link>
                <Link to='/JammuAndKashmir' onClick={closeMenuOnClick}><p>Jammu & Kashmir</p></Link>
                <Link to='/Himachal_Pradesh' onClick={closeMenuOnClick}><p>Himachal Pradesh</p></Link>
                <Link to='/Uttarakhand' onClick={closeMenuOnClick}><p>Uttarakhand</p></Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <p>West</p>
              <div className="dropdown-content">
                <Link to='/rajasthan' onClick={closeMenuOnClick}><p>Rajasthan</p></Link>
                <Link to="/gujrat" onClick={closeMenuOnClick}><p>Gujarat</p></Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <p>Central</p>
              <div className="dropdown-content">
                <Link to="/mp" onClick={closeMenuOnClick}><p>Madhya Pradesh</p></Link>
                <Link to='/maharashtra' onClick={closeMenuOnClick}><p>Maharashtra</p></Link>
                <Link to='/daman' onClick={closeMenuOnClick}><p>Daman & Diu</p></Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <p>East</p>
              <div className="dropdown-content">
                <Link to='/Sikkim' onClick={closeMenuOnClick}><p>Sikkim</p></Link>
                <Link to='/Odisha' onClick={closeMenuOnClick}><p>Odisha</p></Link>
                <Link to='/Assam' onClick={closeMenuOnClick}><p>Assam</p></Link>
                <Link to='/WestBengal' onClick={closeMenuOnClick}><p>West Bengal</p></Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <p>South</p>
              <div className="dropdown-content">
                <Link to='/goa' onClick={closeMenuOnClick}><p>Goa</p></Link>
                <Link to='/karnataka' onClick={closeMenuOnClick}><p>Karnataka</p></Link>
                <Link to='/kerala' onClick={closeMenuOnClick}><p>Kerala</p></Link>
                <Link to='/andhra' onClick={closeMenuOnClick}><p>Andhra Pradesh</p></Link>
              </div>
            </div>

            {isLoggedIn ? (
              <button className="signup-buttonn" onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <Link to="/LoginForm" onClick={closeMenuOnClick}>
                  <button className="signup-buttonn">Login</button>
                </Link>
                <Link to="/SignUpForm" onClick={closeMenuOnClick}>
                  <button className="signup-buttonn">Sign Up</button>
                </Link>
              </>
            )}
          </div>
          <div className="menu" onClick={handleMenuClick} id="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NAveeeee;
