import React from 'react';
import '../../styles/contact.css'

export default function Contact() {



  
  return (
    <div id="contactForm">
      <h4> Contact Form :</h4>
      <form id="contact" className="form-inline" action="/action_page.php">

        <div className="form-group">
          <label className="sr-only" for="name">Name: </label>
          <input type="name" className="form-control" id="name" placeholder='Name' required ></input>
        </div>
        <div className="form-group">
          <label className="sr-only" for="email"> Email: </label>
          <input type="email" className="form-control" id="email" placeholder='Email' required ></input>
        </div>
        <div className="form-group">
          <label className="sr-only" for="message"> Message: </label>
          <input type="text" id="message" className='form-control' placeholder="Message" required ></input>
        </div>
        <button id='submitBtn' type="submit" className="btn btn-default"> Submit </button>
      </form>
    </div>
  );
};

