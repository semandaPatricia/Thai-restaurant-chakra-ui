import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css';
import Layout from './layout';
import HeroSection from './components/HeroSection';
//import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Contact from './pages/contact';
import Home from './pages/Home/index';
import Menu from './pages/menu/index';
import About from './pages/about/index';
import Review from './components/Review'
import MakeYourMeal from './pages/makemeal/index'
import All from './pages/welcome/index'
import Base from './pages/Base/index'
import Toppings from './pages/toppings/index'
import Sauces from './pages/Sauces/index'
import Order from './pages/Order/index/'




export default function App() {
  const [meal, setMeal] = useState({ base: "", toppings: [], sauce: "" });

  const addBase = (base) => {
    setMeal({ ...meal, base });
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!meal.toppings.includes(topping)) {
      newToppings = [...meal.toppings, topping];
    } else {
      newToppings = meal.toppings.filter(item => item !== topping);
    }
    setMeal({ ...meal, toppings: newToppings });
  }

  const addSauce = (sauce) => {
    setMeal({ ...meal, sauce });
  }

  return (
    <>
      <Router>
      <Navbar />
      <Layout>
        
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
          {/* dropdown page route */}
          <Route path="/makeyourmeal" element={<MakeYourMeal />} />
          <Route path="/all" element={<All />} />
          <Route path="/base" element={<Base addBase={addBase} meal={meal} />} />
          <Route path="/topping" element={<Toppings addTopping={addTopping} meal={meal} />} />
          <Route path="/sauces" element={<Sauces addSauce={addSauce} meal={meal} />} />
          <Route path="/order" element={<Order meal={meal} />} />
        </Routes>
        {/* Footer (you can add this component if needed) */}
        {/* <Footer /> */}
        </Layout>
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
      <Review/>
      
    </>
  );
}
