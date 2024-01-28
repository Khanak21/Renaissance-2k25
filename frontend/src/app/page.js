import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors/Sponsors";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ButtonBackToTop from "./components/ButtonBackToTop/ButtonBackToTop";

const HomePage = () => {
  return (
    <>
      <div className="h-screen relative">
        <Hero />
        <Navbar />
        <About />
        <Events />
        <Sponsors />
        <Testimonials />
        <Footer />
        <ButtonBackToTop />
      </div>
      

      
    </>
  );
};

export default HomePage;
