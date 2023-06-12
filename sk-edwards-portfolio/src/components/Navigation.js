import React from 'react';
import '../styles/navbar.css';
import miniLogo from '../utils/miniLogo.svg'


  function Navigation() {
    return (
     
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <img src={miniLogo} alt=""/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#about">About Me <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#resume">Resume</a>
          </li>
        </ul>
      </div>
    </nav>

    );
  }
  
  export default Navigation;