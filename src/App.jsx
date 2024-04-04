import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
//import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Contact from './pages/contact';
import Home from './pages/Home/index';
import Menu from './pages/menu/index';
import About from './pages/about/index';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* Routes for different pages */}
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Homepage />} />
          {/* About page route */}
          <Route path="/about" element={<About />} />
          {/* Menu page route */}
          <Route path="/menu" element={<Menu />} />
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Footer (you can add this component if needed) */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

// Component for rendering Home page
function Homepage() {
  return (
    <>
      {/* Render HeroSection and Testimonials only on the home page */}
      <HeroSection />
      
    </>
  );
}
