
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import ContactUs from './Components/Pages/Home/ContactUs';
import AboutUs from './Components/Pages/Home/AboutUs';
import HeaderTop from './Components/Shared/Header/HeaderTop';
import AuthProvider from './Components/Contexts/AuthProvider/AuthProvider';
import BloodRequests from "./Components/Pages/BloodRequest/BloodRequests";
import LogIn from "./Components/LogIn/LogIn/LogIn";
import Register from "./Components/LogIn/Register/Register";

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
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="bloodRequest" element={<BloodRequests />} />
      </Routes>
      </AuthProvider>
     
    </div>
  );
}

export default App;
