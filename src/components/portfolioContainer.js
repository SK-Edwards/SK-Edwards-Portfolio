import React from 'react';
import Navigation from './Navigation';
import About from './pages/About'
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




export default function PortfolioContainer()  {


return (  

    <Router>
    <Navigation />
    <Routes> 
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
       
    </Routes>
  </Router>
  );
};


