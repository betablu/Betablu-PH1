import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Hero, LatestNews, Stories, Research, Business, Footer } from './components';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LatestNews />
      <Stories />
      <Research />
      <Business />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;