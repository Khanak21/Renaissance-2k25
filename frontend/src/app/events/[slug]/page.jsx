import React from "react";
import TeamPage from "./components/TeamPage";
import StickyNavbar from "../../components/StickyNavbar/StickyNavbar";
import Footer from "../../components/Footer/Footer";
const eventspage = ({ params }) => {
  return (
    <div>
      <div className="sticky top-0 z-[100]">
        <StickyNavbar />
      </div>
      <TeamPage />
      <Footer />
    </div>
  );
};

export default eventspage;
