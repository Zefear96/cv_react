import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
