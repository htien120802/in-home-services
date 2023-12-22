import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionLogout } from 'store/actions';

import { LOCATION } from 'constants/index';

import './index.css';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.Auth.accessToken);

  const [navWidth, setNavWidth] = useState('0px');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const callbackLogoutSuccess = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleLogout = () => {
    dispatch(actionLogout({ callback: callbackLogoutSuccess }));
  };

  const openNav = () => {
    setNavWidth('750px');
  };

  const closeNav = () => {
    setNavWidth('0px');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/services/page/0?name=${encodeURIComponent(searchTerm)}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      {/* Sidenav */}
      <div id="mySidenav" className="sidenav" style={{ width: navWidth }}>
        <ul className="menu_sidebar">
          <li><button type="button" className="closebtn" onClick={closeNav}>&times;</button></li>
          <li><Link to={LOCATION.HOME} onClick={closeNav}>01. Home</Link></li>
          <li><Link to={LOCATION.ABOUT} onClick={closeNav}>02. About</Link></li>
          <li><Link to={LOCATION.SERVICES} onClick={closeNav}>03. Services</Link></li>
          <li><Link to={LOCATION.CONTACT} onClick={closeNav}>04. Contact Us</Link></li>
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
                    <Link to="/"><img className="img-responsive" src="/assets/img/logo.png" alt="#" /></Link>
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
                          <Link to="/profile">Profile</Link>
                          <button className="dropdown-content-logout" type="button" onClick={handleLogout}>Logout</button>
                        </div>
                        )}
                      </div>
                    ) : (
                      <Link to="/login" className="login-redirect">
                        <img className="profile-icon" src="/assets/images/profile_icon.png" alt="#" />
                      </Link>
                    )}

                    <li className="searchbar">
                      <input
                        className="search_input"
                        type="text"
                        name=""
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyPress}
                      />
                      <a
                        href="/"
                        className="search_icon"
                        onClick={handleSearch}
                      >
                        <img src="/assets/images/search_icon.png" alt="#" />
                      </a>
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
