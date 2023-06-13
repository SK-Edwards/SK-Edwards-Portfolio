import React from 'react';
import '../styles/footer.css'



function Footer() {
    return (
        <footer  class="text-center text-lg-start" >
        <div class="container d-flex justify-content-center py-5">
         <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
            <i class="fab fa-linkedIn"><a href="/" >LinkedIn</a></i>
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
            <i class="fab fa-instagram"><a href="/" >Instagram</a></i>
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
            <i class="fab fa-gitHub"><a href="https://github.com/SK-Edwards">GitHub</a></i>
          </button>
        </div>

 

    
        <div class="text-center  p-3" >
         
          <a  href="https://github.com/SK-Edwards">Made by: Shamary Edwards</a>
        </div>
        
      </footer>
    );
};

export default Footer;