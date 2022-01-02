
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import ContactUs from './Components/Pages/Home/ContactUs';
import AboutUs from './Components/Pages/Home/AboutUs';
import HeaderTop from './Components/Shared/Header/HeaderTop';
import AuthProvider from './Components/Contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div>
      <HeaderTop/>
      <AuthProvider>
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
      </Routes>
      </AuthProvider>
     
    </div>
  );
}

export default App;
