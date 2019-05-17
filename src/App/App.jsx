import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Results from '../Components/Results';
import Products from '../Components/Products';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Stepper from '../Components/Stepper';
import '../application.scss';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Stepper />
      <Hero />
      <Services />
      <Results />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
