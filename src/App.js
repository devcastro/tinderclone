import React, {useState, useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"



function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });



  return (

    <main className="bg-tinder bg-cover h-screen bg-no-repeat sm:bg-center">
      <div className="absolute h-screen inset-0 bg-black bg-opacity-50">
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Testimonials />
      <Footer />
      </div>
      </div>
    </main>
    
    
  );
}

export default App;
