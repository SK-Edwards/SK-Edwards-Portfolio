import React from 'react';
import '../styles/footer.css'



function Footer() {
    return (
        <footer id="contact" class="text-center text-lg-start" >
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

  <form id="contactForm" class="form-inline" action="/action_page.php">
  <div class="form-group">
    <label class="sr-only" for="name">Name: </label>
    <input type="name" class="form-control" id="name" placeholder='Name' required ></input>
  </div>
  <div class="form-group">
    <label class="sr-only" for="email"> Email: </label>
    <input type="email" class="form-control" id="email" placeholder='Email' required ></input>
  </div>
  <div class="form-group">
    <label class="sr-only" for="message"> Message: </label>
    <input type="text" id="message" class='form-control' placeholder="Message" required ></input>
  </div>
  <button id='submitBtn' type="submit" class="btn btn-default"> Submit </button>
</form>

    
        <div class="text-center  p-3" >
          © 2020 Copyright:
          <a  href="https://github.com/SK-Edwards">Made by: Shamary Edwards</a>
        </div>
        
      </footer>
    );
};

export default Footer;