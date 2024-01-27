"use client";
import React, { useState,useEffect } from "react";

import { FaLock } from "react-icons/fa";

import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Timer from "./Timer";
import Image from "next/image";
//import Background from "./Background";

const img = "/rene.png";

const OtpVerify = ({data,setData,setPage}) => {
 
  const [icon, seticon] = useState(true);

 
//adding otp to fomdata
function  handleFormChange(e){
 
setData({
  ...data,
  [e.target.name]:e.target.value
})
console.log(data)
}


//verify otp function
function handleSubmit(e){
  e.preventDefault()
  setPage(3)

}


  return (
    <>
      <div className="bg-back w-full h-full">
        <div className="">
          <Navbar />
        </div>

        <div className="bg-[#1D174F] h-[150vh] w-screen h-screen flex justify-center p-[20px] pt-[10em] sm:pt-[10em]  ">
          {/* <Background /> */}
          <div className=" w-screen opacity-[0.85] h-[35em] z-20 sm:w-[500px] sm:h-[35em] bg-[#EEF5DB] flex flex-col rounded p-[25px] sm:p-[50px]">
            <div className="mb-[25px] logo flex flex-col justify-center items-center w-full">
            <Image 
              width={700}  // Set the width of the image
              height={250} // Set the height of the image
              src={img}>

              </Image>
              <h1 className="tracking-[1.2px] text-gray-500 font-medium mt-[10px] text-lg">
               Enter One-Time Password
              </h1>
              <p>Time remaining</p>
              <Timer/>
     
            </div>

            <div className="">
            
                <div className="mb-[24px] flex">
                  <div className="mr-[10px] flex justify-center items-center">
                
                    <FaLock size="21px" color="#2F3E46" />
                  </div>
                  <input

                  onChange={handleFormChange}
                    className="rounded outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px]"
                    placeholder="OTP"
                    type="number"
                    name="otp"
                    value={data?.otp}
                    required
                  ></input>
                </div>
             

              
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full mb-2 p-[5px] bg-[#1D174F] text-white rounded-full hover:bg-zinc-600"
                >
                  Verify
                </button>
                <button
                  type="submit"
                  onClick={()=>setPage(1)}
                  className="w-full p-[5px] bg-[#27282A] text-white rounded-full hover:bg-zinc-600"
                >
                  Back
                </button>
              
              <div className="mt-[30px] flex justify-center items-center">
                <p className="text-[11.5px] sm:text-[14px] mr-[15px] tracking-[0.6px] text-[14px] text-gray-800">
                  Already Have An Account💎
                </p>
                <Link
                  href="/auth/login"
                  className="text-[11.5px] sm:text-[14px] font-bold ml-[15px] tracking-[1px] text-[14px] text-back hover:text-slate-600"
                >
                  Log-In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
