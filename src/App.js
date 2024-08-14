import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import EnhancedHero from './EnhancedHero';
import StackedCards from './StackedCards';
import SplineScene from './SplineScene';
import Craft from './Craft'; 
import DesignYourKitchen from './DesignYourKitchen'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <EnhancedHero />
            <StackedCards />
            <SplineScene />
          </>
        } />
        <Route path="/craft" element={<Craft />} />
        <Route path="/design-your-kitchen" element={<DesignYourKitchen />} />
      </Routes>
    </Router>
  );
}

export default App;
