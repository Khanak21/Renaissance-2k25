"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import StickyNavbar from "../StickyNavbar/StickyNavbar";
import toast from "react-hot-toast";
import loginUserApi from "../../../api/loginUser.api";
import forgetPasswordApi from "../../../api/forgetPassword.api";

const img = "/rene.png";

const Login = ({ type }) => {
  const [icon, seticon] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const show = () => {
    seticon(!icon);
  };
  const handleLoginClick = async () => {
    if (type === "1") {
      if (email === "" || password === "") {
        toast.error("email or password field cannot be empty");
        return;
      }
      const apiResult = await loginUserApi({ email, password });
      if (apiResult.success) {
        toast.success(apiResult.message);
        setEmail("");
        setPassword("");
        router.push("/");
      } else {
        toast.error(apiResult.message);
      }
    } else {
      if (email === "") {
        toast.error("email field cannot be empty");
        return;
      }
      const apiResult = await forgetPasswordApi({ email });
      if (apiResult.success) {
        toast.success(apiResult.message);
        router.push("/");
      } else {
        toast.error(apiResult.message);
      }
    }
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
                SIGN-IN
              </h1>
            </div>

            <div>
              <div className="mb-[24px] flex">
                <div className="mr-[8px] flex justify-center items-center">
                  <FaUserCircle size="21px" color="#2F3E46" />
                </div>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="rounded outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px]"
                  placeholder="Email"
                  required
                ></input>
              </div>

              {type === "1" && (
                <div className="mb-[3px] flex">
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
              )}

              {type === "1" && (
                <div className="text-end w-full mb-[24px]">
                  <Link
                    href="/auth/forgetpassword"
                    className="text-[11px] text-back font-semibold hover:text-slate-600"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                onClick={handleLoginClick}
                className="w-full p-[5px] bg-[#1D174F] bg-back text-white rounded-full hover:bg-zinc-600"
              >
                {type === "1" ? "LOG-IN" : "VERIFY MAIL"}
              </button>
            </div>

            {/* <div className="mt-[30px] flex items-center justify-center">
              <p className="tracking-[1px] text-[12px] text-gray-800">
                OR LOGIN USING
              </p>
            </div>

            <div className="mt-[10px] flex items-center justify-center">
              <div className="rounded-full cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  hover:scale-110 transition-all duration-1000 bg-white p-[5px]">
                <RiFacebookCircleFill size="30px" color="#3b5998" />
              </div>
              <div className="rounded-full cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px] hover:scale-110 transition-all duration-1000 bg-white p-[7px]">
                <BsGoogle size="23px" color="#db3236" />
              </div>
              <div className="rounded-full cursor-pointer bg-sec p-[4px] hover:rounded-[5000px]  hover:scale-110 transition-all duration-1000 bg-white p-[5px]">
                <AiFillTwitterCircle size="29px" color="#1DA1F2" />
              </div>
            </div> */}

            <div className="mt-[30px] flex justify-center items-center">
              <p className="text-[11.9px] sm:text-[14px] mr-[15px] tracking-[0.6px] text-[14px] text-gray-800">
                Not Registered yet?
              </p>
              <Link
                href="/auth/register"
                className="text-[11.9px] sm:text-[14px] font-bold ml-[15px] tracking-[1px] text-[14px] text-back hover:text-slate-600"
              >
                Sign-Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
