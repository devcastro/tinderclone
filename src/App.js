import React from "react";
import "./App.css";
import Learn from "./components/pages/Learn";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Products from "./components/pages/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"

function App() {
  return (
    

    <main className="bg-tinder bg-cover h-screen bg-no-repeat sm:bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50">
    <div>
      <Navbar />
      <Hero />
      <Footer />
      <Learn />
      <Products />
      <Testimonials />
      <Contact />
      </div>
      </div>
    </main>
    
    
  );
}

export default App;
