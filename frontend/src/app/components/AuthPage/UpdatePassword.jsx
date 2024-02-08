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
      <div className="w-full h-full bg-custom-primary">
        <div className="sticky top-0 z-[100]">
          <StickyNavbar />
        </div>

        <div className="relative bg-custom-secondary w-screen flex justify-center pt-10  px-[30px]">
          <div className="p-[17px] mb-24 sm:p-[30px] rounded-2xl bg-custom-primary w-full  sm:w-[500px] flex flex-col rounded">
            <div className="mb-[25px] logo flex flex-col justify-center items-center w-full">
              <Image
                className=""
                width={500} // Set the width of the image
                height={250} // Set the height of the image
                src={img}
              ></Image>{" "}
              <h1 className="tracking-[1.2px] text-custom-secondary text-lg font-medium md:text-2xl mt-[10px]">
                UPDATE PASSWORD
              </h1>
            </div>

            <div>
              <div className="flex mb-4">
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
                  placeholder="Re-enter password"
                  required
                ></input>
              </div>
               <div className="flex justify-center w-full">
              <button
                onClick={handleUpdatePasswordClick}
                className="w-[50%] text-base px-4 py-2 bg-custom-secondary rounded-full transition duration-500 ease-in-out text-custom-primary hover:bg-custom-primary hover:text-custom-secondary"
              >
                UPDATE PASSWORD
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
