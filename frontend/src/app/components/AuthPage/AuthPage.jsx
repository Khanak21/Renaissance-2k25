"use client";
import React, { useState } from "react";
import Register from "./Register";
// import OtpVerify from "./OtpVerify";
import StickyNavbar from "../StickyNavbar/StickyNavbar";

const AuthPage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    username: "",
    password: "",
    student_from: "",
    Gender: "",
    email: "",
    tel: "",
  });

  return (
    <>
      <div className="sticky top-0 z-[100]">
        <StickyNavbar />
      </div>

      <div className="h-screen bg-custom-accent">
        {page === 1 && (
          <Register data={data} setData={setData} setPage={setPage} />
        )}
        {/* {page === 2 && (
          <OtpVerify data={data} setData={setData} setPage={setPage} />
        )} */}
      </div>
    </>
  );
};

export default AuthPage;
