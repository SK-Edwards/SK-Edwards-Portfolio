import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About'
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import SearchBox from './SearchBox';



export default function PortfolioContainer()  {
   const [currentPage, setCurrentPage] = useState('About');

// method to check the value of current page and to render the appropriate page.

const renderPage = () => {

    if (currentPage === 'About') {
        return <About />;

    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    if (currentPage === 'Project') {
        return <Project />
    }
      return <Resume />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (  //passsing currentPage from state and the function to update it.
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
         <SearchBox/>

        {renderPage()}
    </div>
  );
};


