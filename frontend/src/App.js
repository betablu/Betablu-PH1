import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Header, 
  Home, 
  CosmosPage, 
  NovaPage, 
  APIPage, 
  ResearchPage, 
  SafetyPage, 
  CompanyPage, 
  LoginPage,
  Footer 
} from './components';

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cosmos" element={<CosmosPage />} />
          <Route path="/nova" element={<NovaPage />} />
          <Route path="/api" element={<APIPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;