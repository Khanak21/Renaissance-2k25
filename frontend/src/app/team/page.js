import React from "react";
import CardTest from "./components/CardTest";
import Footer from "../components/Footer/Footer";
import StickyNavbar from "../components/StickyNavbar/StickyNavbar";

const team = () => {
  return (
    <>
      <div className="sticky top-0 z-[100]">
        <StickyNavbar />
      </div>
      <div className="bg-custom-dark py-4">
        <CardTest />
      </div>
      <Footer />
    </>
  );
};

export default team;
