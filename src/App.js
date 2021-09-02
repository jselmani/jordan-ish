import React from 'react';

import HomePage from './pages/HomePage/HomePage.component';

import './App.css';
import Header from './components/Header/Header.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
