"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiFillEye, AiOutlineCloseCircle } from "react-icons/ai";
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
        const token = apiResult.data.accessToken;
        localStorage.setItem("token", token);
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
        toast((t) => (
          <span className="flex items-center justify-between w-full h-full">
            {apiResult.message}
            <button onClick={() => toast.dismiss(t.id)} className="ml-2">
              <AiOutlineCloseCircle />
            </button>
          </span>
        ));
        router.push("/");
      } else {
        toast.error(apiResult.message);
      }
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-custom-secondary">
        <div className="sticky top-0 z-[100]">
          <StickyNavbar />
        </div>

        <div className="relative bg-custom-secondary w-screen flex justify-center pt-10  px-[30px]">
          <div className="p-[17px] mb-24 sm:p-[30px] rounded-2xl bg-custom-primary w-full  sm:w-[500px] flex flex-col">
            <div className="mb-[25px] logo flex flex-col justify-center items-center w-full">
              <Image
                className=""
                width={500} // Set the width of the image
                height={250} // Set the height of the image
                src={img}
              ></Image>{" "}
              <h1 className="tracking-[1.2px] text-custom-secondary text-lg font-medium md:text-2xl mt-[10px]">
                WELCOME BACK!
              </h1>
            </div>

            <div>
              <div className="mb-[24px] flex">
                <div className="mr-[8px] flex justify-center items-center">
                  <FaUserCircle size="24px" color="#EEF5DB" />
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
                    <RiLockPasswordFill size="24px" color="#EEF5DB" />
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
                    className="rounded-r-md p-[2.6px] flex justify-center items-center bg-custom-light cursor-pointer"
                  >
                    {icon === true ? (
                      <AiFillEye size="24px" color="hsl(217,10%,25%)" />
                    ) : (
                      <BsEyeSlashFill size="24px" color="hsl(217,10%,25%)" />
                    )}
                  </div>
                </div>
              )}

              {type === "1" && (
                <div className="text-end w-full mb-[24px]">
                  <Link
                    href="/auth/forgetpassword"
                    className="text-sm font-semibold text-custom-secondary"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <div className="flex justify-center w-full">
                <button
                  onClick={handleLoginClick}
                  className="w-[50%] text-base px-4 py-2 bg-custom-secondary rounded-full transition duration-500 ease-in-out text-custom-primary hover:bg-custom-primary hover:text-custom-secondary"
                >
                  {type === "1" ? "LOGIN" : "VERIFY MAIL"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center mt-6">
              <p className="mr-3 text-base text-custom-secondary">
                Not registered yet?
              </p>
              <Link
                href="/auth/register"
                className="text-base font-bold underline text-custom-secondary hover:text-custom-warm hover:scale-110"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
