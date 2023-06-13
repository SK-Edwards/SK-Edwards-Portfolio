import React from 'react';
import '../styles/navbar.css';
import miniLogo from '../utils/miniLogo.svg'


  function Navigation({ currentPage, handlePageChange }) {
    return (
     
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <img src={miniLogo} alt=""/>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
             href="#about"
             onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
             >
              About Me 
              </a>
          </li>
          <li className="nav-item">
            <a 
            href="#projects"
            oncClick={() => handlePageChange('Project')} 
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'} 
            >
              Projects
              </a>
          </li>
          <li className="nav-item">
            <a 
            href="#contact"
            oncClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
            >
              Contact
              </a>
          </li>
          <li className="nav-item">
            <a 
            href="#resume"
            oncClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
              </a>
          </li>
        </ul>
      </div>
    </nav>

    );
  }
  
  export default Navigation;