import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import miniLogo from '../utils/miniLogo.svg';

function Navigation() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img src={miniLogo} alt="Logo"/>
    <button classNAme="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link"> About Me </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link"> Projects </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link"> Contact </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-link"> Resume </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navigation;