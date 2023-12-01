import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { actionLogout } from 'store/actions';

import { LOCATION } from 'constants/index';

import './index.css';

function Header() {
  const dispatch = useDispatch();

  const [navWidth, setNavWidth] = useState('0px');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(actionLogout());
    setIsLoggedIn(false);
  };

  const openNav = () => {
    setNavWidth('750px');
  };

  const closeNav = () => {
    setNavWidth('0px');
  };

  const updateLoginStatus = () => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    updateLoginStatus();
  }, []);

  return (
    <>
      {/* Sidenav */}
      <div id="mySidenav" className="sidenav" style={{ width: navWidth }}>
        <ul className="menu_sidebar">
          <li><button type="button" className="closebtn" onClick={closeNav}>&times;</button></li>
          <li><Link to={LOCATION.HOME} onClick={closeNav}>01. Home</Link></li>
          <li><Link to={LOCATION.ABOUT} onClick={closeNav}>02. About</Link></li>
          <li><Link to={LOCATION.SERVICES} onClick={closeNav}>03. Services</Link></li>
          <li><Link to={LOCATION.REVIEWS} onClick={closeNav}>04. Reviews</Link></li>
          <li><Link to={LOCATION.CONTACT} onClick={closeNav}>05. Contact Us</Link></li>
        </ul>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="full">
                  <button type="button" className="toggle_icon" onClick={openNav}>
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                  </button>

                  <div className="logo_circle">
                    <a href="index.html"><img className="img-responsive" src="/assets/img/logo.png" alt="#" /></a>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="float-right">
                  <ul className="top_links">
                    {isLoggedIn ? (
                      <div className="dropdown">
                        <button type="button" onClick={toggleDropdown}>
                          <img className="profile-icon" src="/assets/images/profile_icon.png" alt="#" />
                        </button>

                        {isDropdownOpen && (
                        <div className="dropdown-content">
                          <a href="/">Profile</a>
                          <a href="/">Settings</a>
                          <button type="button" onClick={handleLogout}>Logout</button>
                        </div>
                        )}
                      </div>
                    ) : (
                      <a href="/login" className="login-redirect">
                        <img className="profile-icon" src="/assets/images/profile_icon.png" alt="#" />
                      </a>
                    )}

                    <li className="searchbar">
                      <input className="search_input" type="text" name="" placeholder="Search..." />
                      <a href="/" className="search_icon"><img src="/assets/images/search_icon.png" alt="#" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
