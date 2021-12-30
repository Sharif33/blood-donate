import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import ContactUs from './Components/Pages/Home/ContactUs';
import AboutUs from './Components/Pages/Home/AboutUs';
import HeaderTop from './Components/Shared/Header/HeaderTop';

function App() {
  return (
    <div>
      <HeaderTop/>
      <Routes>
        
         <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
      </Routes>
     
    </div>
  );
}

export default App;
