import React from 'react';
import '../styles/footer.css'
import SearchBox from './SearchBox';


function Footer() {
    return (
        <footer  className="text-center text-lg-start" >
        <div className="container d-flex justify-content-center py-5">
         <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
            <i className="fab fa-linkedIn"><a href="https://www.linkedin.com/in/shamary-edwards-185351273/" >LinkedIn</a></i>
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
            <i className="fab fa-instagram"><a href="https://www.instagram.com/shamta.clause/" >Instagram</a></i>
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
            <i className="fab fa-gitHub"><a href="https://github.com/SK-Edwards">GitHub</a></i>
          </button>
        </div>
        <SearchBox />

    
        <div className="text-center  p-3" >
         
          <a  href="https://github.com/SK-Edwards">Made by: Shamary Edwards</a>
        </div>
        
      </footer>
    );
};

export default Footer;