import React from 'react';
import '../../styles/contact.css'

export default function Contact() {
    return (
<div>
        <form id="contact" class="form-inline" action="/action_page.php">
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
 </div>
    );
};

