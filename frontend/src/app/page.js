"use client";

import React from "react";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Sponsors from "./components/Sponsors/Sponsors";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ButtonBackToTop from "./components/ButtonBackToTop/ButtonBackToTop";
import Speakers from "./components/Speakers/Speakers";
import MapLocation from "./components/Map/Map";
import Gallery from "./components/Gallery/Gallery";
import Events from "./components/Events/Events";
import Navbar from "./components/Navbar/Navbar";
import FAQ from "./components/FAQ/FAQ";
import { List } from "./constant/imageList";

const HomePage = () => {
  return (
    <>
      <div className="h-screen relative">
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Sponsors ImageList={List} />
        <Speakers />
        <Testimonials />
        <Gallery />
        <FAQ />
        <MapLocation />
        <Footer />
        <ButtonBackToTop />
      </div>
    </>
  );
};

export default HomePage;
