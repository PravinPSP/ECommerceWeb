import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FilterComponent from './components/FilterComponent/FilterComponent';
import FeatureProduct from './pages/FeatureProduct/FeatureProduct';

function App() {
 

  return (
    <BrowserRouter>
             <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all-product" element={<Home/>} />
        <Route path="/featured-product" element={<FeatureProduct/>} />
      </Routes>
    
    </BrowserRouter>
  );

}

export default App;
