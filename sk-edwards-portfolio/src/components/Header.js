import React from "react";
import logo from '../utils/logo.svg'
import '../styles/header.css';

function Header() {
  return (
   
    <header className='headerContainer'>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
	  <div class="container">
		  <img src={logo} alt="" className="brand-logo" />
		<h1>S.K. Edwards Portfolio</h1>
		
	  </div>
	
</header>
      
  );
}

export default Header;