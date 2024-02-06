"use client";
import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import StickyNavbar from "../StickyNavbar/StickyNavbar";

const img = "/rene.png";

const UpdatePassword = ({
  password,
  setPassword,
  rePassword,
  setRePassword,
  handleUpdatePasswordClick,
}) => {
  const [icon, seticon] = useState(true);

  const show = () => {
    seticon(!icon);
  };
  return (
    <>
      <div className="bg-[#1D174F] w-full h-full">
        <div className="sticky top-0 z-[100]">
          <StickyNavbar />
        </div>

        <div className="relative h-[70em]  bg-[#1D174F]   w-screen flex justify-center  pt-[5em]   px-[30px]  ">
          <div className="p-[17px] sm:p-[30px]  bg-[#EEF5DB] opacity-[0.85] w-full h-[40em]  sm:w-[500px] sm:h-[40em]  flex flex-col rounded">
            <div className="mb-[25px] logo flex flex-col justify-center items-center w-full">
              <Image
                className=""
                width={700} // Set the width of the image
                height={250} // Set the height of the image
                src={img}
              ></Image>{" "}
              <h1 className="tracking-[1.2px] text-[#1D174F] font-medium mt-[10px] text-sm sm:text-lg">
                UPDATE-PASSWORD
              </h1>
            </div>

            <div>
              <div className="mb-4 flex">
                <div className="mr-[8px] flex justify-center items-center">
                  <RiLockPasswordFill size="21px" color="hsl(217,10%,25%)" />
                </div>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={icon === true ? "password" : "text"}
                  className="rounded-l-md outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px] "
                  placeholder="Password"
                  required
                ></input>
                <div
                  onClick={show}
                  className="rounded-r-md p-[2.6px] flex justify-center items-center bg-white cursor-pointer"
                >
                  {icon === true ? (
                    <AiFillEye size="20px" color="hsl(217,10%,25%)" />
                  ) : (
                    <BsEyeSlashFill size="20px" color="hsl(217,10%,25%)" />
                  )}
                </div>
              </div>

              <div className="mb-[3px] flex">
                <div className="mr-[8px] flex justify-center items-center">
                  <RiLockPasswordFill size="21px" color="hsl(217,10%,25%)" />
                </div>
                <input
                  value={rePassword}
                  onChange={(e) => {
                    setRePassword(e.target.value);
                  }}
                  type="password"
                  className="rounded-l-md outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px] "
                  placeholder="ReEnter - Password"
                  required
                ></input>
              </div>

              <button
                onClick={handleUpdatePasswordClick}
                className="w-full m-4 p-[5px] bg-[#1D174F] bg-back text-white rounded-full hover:bg-zinc-600"
              >
                UPDATE PASSWORD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
