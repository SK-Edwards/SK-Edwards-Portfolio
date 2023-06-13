import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/portfolioContainer';

const App = () =>

    <div className="App">
     
      <Header />
      <PortfolioContainer>
      </PortfolioContainer>
      <Footer/>

    </div>
  

export default App;
