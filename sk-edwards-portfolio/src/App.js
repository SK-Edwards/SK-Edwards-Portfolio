import React from 'react';
import './App.css'
import Navigation from './components/Navigation';
import Header
 from './components/Header';
import Project from './components/Project';

import Footer from './components/Footer';
import About from './components/About'
function App() {
  return (
    <div className="App">
     

      <Header />
      <Navigation />
      <About/>
      <Project />
      
      <Footer/>


    </div>
  );
}

export default App;
