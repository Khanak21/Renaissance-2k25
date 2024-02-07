"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navItems = ["home", "events", "speakers", "location", "team", "contact"];

const HamOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const HamClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navScroll, setScroll] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLoggedIn(true);
    }
    const handleScroll = () => {
      if (window.scrollY > 500) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    // Rest of your component code remains unchanged
    // navbar component
    <nav
      className={`w-full text-white  flex flex-row justify-between z-[1000] fixed transition duration-600 ${
        navScroll ? "shadow-xl bg-custom-primary" : ""
      }`}
    >
      {/* logo  */}
      <div
        className={`logo px-4 py-4 md:px-8 md:py-2 flex justify-center items-center w-1/3 h-1/3 ${
          !navScroll
            ? "lg:w-1/3 lg:h-1/3"
            : "md:w-1/3 md:h-1/3 lg:w-1/6 lg:h-1/6"
        } xs:px-8 xs:py-8 transition duration-600`}
      >
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/rene.png"
            alt="Renaissance Logo"
            height={400}
            width={400}
          />
        </Link>
      </div>

      {/* Navigation Menu  */}
      <div className="container hidden md:flex justify-end px-3 xl:px-12">
        <ul
          className={`${
            navScroll ? "text-custom-secondary" : "text-custom-primary"
          } text-sm font-light flex flex-row justify-center items-center`}
        >
          {navItems.map((item) => (
            <Link
              key={`link-${item}`}
              href={
                item === "team"
                  ? "/team"
                  : item === "speakers"
                  ? "/allspeakers"
                  : `/#${item}`
              }
              className={`mx-2 px-1 lg:mx-4 lg:px-2 relative  before:content-[''] before:absolute ${
                navScroll ? "before:bg-custom-warm" : "before:bg-custom-primary"
              } before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full ${
                navScroll
                  ? "hover:text-custom-warm"
                  : "hover:text-custom-primary"
              }`}
            >
              <li className="cursor-pointer">{item.toUpperCase()}</li>
            </Link>
          ))}
          <Link
            href={isUserLoggedIn ? "/dashboard" : "/auth/register"}
            className="mx-4 px-6 py-4 bg-custom-secondary text-custom-dark text-sm font-semibold shadow-[inset_0_0_0_0_rgb(219,84,97)] hover:text-white hover:shadow-[inset_15em_0_0_0_rgb(219,84,97)] transition ease-in-out delay-50 duration-300"
          >
            <li className="cursor-pointer" key={`link-confirmYourSeat`}>
              {isUserLoggedIn ? "DASHBOARD" : "CONFIRM YOUR SEAT"}
            </li>
          </Link>
          {isUserLoggedIn && (
            <button
              onClick={handleLogoutClick}
              className="mx-4 px-6 py-4 bg-[#EEF5DB] text-custom-dark text-sm font-semibold shadow-[inset_0_0_0_0_rgb(219,84,97)] hover:text-white hover:shadow-[inset_15em_0_0_0_rgb(219,84,97)] transition ease-in-out delay-50 duration-300"
            >
              <li className="cursor-pointer" key={`logout`}>
                LOGOUT
              </li>
            </button>
          )}
        </ul>
      </div>

      {/* Hamburger Navigation Menu  */}
      <div className="relative flex items-center justify-center mr-3 cursor-pointer md:hidden ">
        <div className="flex" onClick={() => setToggle(true)}>
          {HamOpen}
        </div>
        {toggle && (
          <div>
            <motion.div
              className="fixed top-0 left-0 right-0 z-50 flex flex-col items-end justify-end w-screen h-screen p-1 pb-4 shadow-lg md:hidden bg-custom-primary"
              animate={{ y: [-500, 0] }}
              exit={{ y: [0, -500] }}
              transition={{
                type: "spring",
                bounce: 0.25,
                damping: 9,
                mass: 0.5,
              }}
            >
              <div className="flex p-3" onClick={() => setToggle(false)}>
                {HamClose}
              </div>

              {/* logo */}
              <div className="flex items-center justify-center w-full p-1 my-5 logo">
                <Image
                  className="cursor-pointer"
                  src="/rene.png"
                  alt="Renaissance Logo"
                  height={400}
                  width={400}
                />
              </div>

              {/* Nav-items  */}
              <ul className="flex flex-col items-center justify-start w-full h-full p-0 m-0 text-xs text-custom-nav ">
                {navItems.map((item) => (
                  <li
                    className="mx-10 my-3 cursor-pointer"
                    key={`link-${item}`}
                  >
                    <Link
                      key={`link-${item}`}
                      href={
                        item === "team"
                          ? "/team"
                          : item === "speakers"
                          ? "/allspeakers"
                          : `/#${item}`
                      }
                      onClick={() => setToggle(false)}
                      className="text-base font-light xs:text-base text-custom-light"
                    >
                      {item.toUpperCase()}
                    </Link>
                  </li>
                ))}
                <Link
                  href={isUserLoggedIn ? "/dashboard" : "/auth/register"}
                  onClick={() => setToggle(false)}
                  className=""
                >
                  <li className="p-4 my-4 text-base font-bold shadow-sm cursor-pointer bg-custom-secondary xs:text-xl text-custom-dark">
                    {isUserLoggedIn ? "DASHBOARD" : "CONFIRM YOUR SEAT"}
                  </li>
                </Link>
                {isUserLoggedIn && (
                  <button
                    onClick={handleLogoutClick}
                    className="p-4 my-4 text-base font-bold shadow-sm cursor-pointer bg-custom-secondary xs:text-xl text-custom-dark"
                  >
                    <li className="cursor-pointer" key={`logout`}>
                      LOGOUT
                    </li>
                  </button>
                )}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
