import React, { useState } from 'react';
import "./nav.css"

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  }

  const closeNav = () => {
    setIsNavOpen(false);
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light container-fluid ${isNavOpen ? 'open' : ''}`}>
      <h2>Portfolio</h2>
      <button className="navbar-toggler" type="button" onClick={handleNavToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto text-center">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#" onClick={closeNav}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience" onClick={closeNav}>Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#service" onClick={closeNav}>Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" onClick={closeNav}>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skill" onClick={closeNav}>Skills</a>
          </li>
        </ul>
        <div className='conatct-button'>
        <a href='#contact' style={{ color: "black" }} onClick={closeNav}><button type="button" className="btn button">Contact us</button></a>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
