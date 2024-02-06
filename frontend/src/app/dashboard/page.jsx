import React from "react";
import StickyNavbar from "../components/StickyNavbar/StickyNavbar";
import Dashboard from "../components/DashBoard/Dashboard";

const dashboardPage = () => {
  return (
    <>
      <div className="sticky top-0 z-[100]">
        <StickyNavbar />
      </div>
      <Dashboard />
    </>
  );
};

export default dashboardPage;
