"use client";
import React, { useState } from "react";
import Register from "./Register";
import OtpVerify from "./OtpVerify";
import Navbar from "../Navbar/Navbar";
const AuthPage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    username: "",
    password: "",
    student_from: "mnnit",
    Gender: "",
    email: "",
    tel: "",
  });

  return (
    <>
      <div className="">
          <Navbar />
        </div>

      <div className="h-[80em] bg-[#1D174F]">
        {page === 1 && (
          <Register data={data} setData={setData} setPage={setPage} />
        )}
        {page === 2 && (
          <OtpVerify data={data} setData={setData} setPage={setPage} />
        )}
      </div>
    </>
  );
};

export default AuthPage;
