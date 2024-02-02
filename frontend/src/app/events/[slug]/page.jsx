import React from "react";
import TeamPage from "./components/TeamPage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const eventspage = ({ params }) => {
  return (
    <div>
      <Navbar />
      <TeamPage />
      <Footer />
    </div>
  );
};

export default eventspage;
