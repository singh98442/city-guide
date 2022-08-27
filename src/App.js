import React from "react";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Feedback from './components/pages/Feedback';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
