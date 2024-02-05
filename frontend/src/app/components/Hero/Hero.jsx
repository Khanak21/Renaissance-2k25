"use client";
import React from "react";
// import BG from "../Hero/abstract-digital-grid-black-background.jpg";
// import BG from "../Hero/HeroBG.mp4" PS- This doesnot work in NEXT without an external file-loader and someone spent hours figuring it out

export const Hero = () => {
  return (
    // set the video in background
    <div>
      <video
        className="absolute h-screen top-0 left-0 min-w-full min-h-full object-cover border border-b-black"
        autoPlay
        loop
        muted
      >
        <source src={process.env.NEXT_PUBLIC_VIDEO_SERVER} type="video/mp4" />
      </video>

      {/* in case we want a img in background */}
      {/* <img
        className="absolute h-screen top-0 left-0 min-w-full min-h-full object-cover border border-b-black"
        src={BG.src} // Assuming BG is the variable holding the image source
        alt="Background Image"
      /> */}

      {/*using a div to blend bottom border of about and hero section */}
      <div className="content-overlay absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-800"></div>
      {/* <Navbar />
      <About /> */}
    </div>
  );
};

export default Hero;
