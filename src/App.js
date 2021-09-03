import React from 'react';

import HomePage from './pages/HomePage/HomePage.component';

import './App.css';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
