import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useDropdownToggle from '../hooks/useDropdownToggle';

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const location = useLocation();
  
  // Use the dropdown toggle hook
  useDropdownToggle();

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [mobileNavActive]);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <i className="bi bi-camera"></i>
          <h1 className="sitename">Jaden Berry</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className={isActive('/')} onClick={closeMobileNav}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={closeMobileNav}>About</Link></li>
            <li className="dropdown">
              <Link to="/gallery" className={isActive('/gallery')}>
                <span>Gallery</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link to="/gallery" onClick={closeMobileNav}>Nature</Link></li>
                <li><Link to="/gallery" onClick={closeMobileNav}>People</Link></li>
                <li><Link to="/gallery" onClick={closeMobileNav}>Architecture</Link></li>
                <li><Link to="/gallery" onClick={closeMobileNav}>Animals</Link></li>
                <li><Link to="/gallery" onClick={closeMobileNav}>Sports</Link></li>
                <li><Link to="/gallery" onClick={closeMobileNav}>Travel</Link></li>
              </ul>
            </li>
            {/*<li><Link to="/services" className={isActive('/services')} onClick={closeMobileNav}>Services</Link></li>*/}
            <li><Link to="/contact" className={isActive('/contact')} onClick={closeMobileNav}>Contact</Link></li>
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <div className="header-social-links">
          <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
          <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        </div>

      </div>
    </header>
  );
};

export default Header;
