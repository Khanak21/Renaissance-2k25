"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import logo from "./logo.png";

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

function StickyNavbar() {
  const [toggle, setToggle] = useState(false);
  const [navScroll, setScroll] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLoggedIn(true);
    }
  });
  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    // Rest of your component code remains unchanged
    // navbar component
    <nav
      className={`w-full text-custom-light flex flex-row justify-between z-[1000] transition duration-600 ${navScroll ? "shadow-xl bg-custom-primary" : "bg-custom-primary"
        }`}
    >
      {/* logo  */}
      <div
        className={`logo px-4 py-4 md:px-8 md:py-2 flex justify-center items-center w-1/3 h-1/3 ${!navScroll
          ? "lg:w-1/3 lg:h-1/3"
          : "md:w-1/3 md:h-1/3 lg:w-1/6 lg:h-1/6"
          } xs:px-8 xs:py-8 transition duration-600`}
      >
        <Link href="/">
          <img
            className="cursor-pointer"
            src={logo.src}
            alt="Renaissance Logo"
          />
        </Link>
      </div>

      {/* Navigation Menu  */}
      <div className="container justify-end hidden px-3 md:flex xl:px-12">
        <ul className="flex flex-row items-center justify-center text-sm font-light text-custom-secondary">
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
              className="mx-2 px-1 lg:mx-4 lg:px-2 relative  before:content-[''] before:absolute before:bg-custom-warm before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-custom-secondary"
            >
              <li className="cursor-pointer">{item.toUpperCase()}</li>
            </Link>
          ))}
          <Link
            href={isUserLoggedIn ? "/dashboard" : "/auth/register"}
            className="mx-4 px-6 py-4 bg-custom-secondary text-custom-dark text-sm font-semibold shadow-[inset_0_0_0_0_rgb(219,84,97)] hover:text-custom-light hover:shadow-[inset_15em_0_0_0_rgb(219,84,97)] transition ease-in-out delay-50 duration-300"
          >
            <li className="cursor-pointer" key={`link-confirmYourSeat`}>
              {isUserLoggedIn ? "DASHBOARD" : "CONFIRM YOUR SEAT"}
            </li>
          </Link>
          {isUserLoggedIn && (
            <button
              onClick={handleLogoutClick}
              className="mx-4 px-6 py-4 bg-custom-secondary text-custom-dark text-sm font-semibold shadow-[inset_0_0_0_0_rgb(219,84,97)] hover:text-custom-light hover:shadow-[inset_15em_0_0_0_rgb(219,84,97)] transition ease-in-out delay-50 duration-300"
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
              className="fixed top-0 left-0 right-0 z-50 flex flex-col items-end justify-end w-screen h-screen p-1 pb-4 shadow-lg md:hidden bg-custom-dark"
              animate={{ y: [-500, 0] }}
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
                <img
                  className="w-[70%]"
                  src={logo.src}
                  alt="Renaissance Logo"
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
                      className="text-base font-light text-custom-light"
                    >
                      {item.toUpperCase()}
                    </Link>
                  </li>
                ))}
                <Link
                  href={isUserLoggedIn ? "/dashboard" : "/auth/register"}
                  className=""
                  onClick={() => setToggle(false)}
                >
                  <li className="p-4 my-4 text-base font-bold shadow-sm cursor-pointer bg-custom-secondary text-custom-dark">
                    {isUserLoggedIn ? "DASHBOARD" : "CONFIRM YOUR SEAT"}
                  </li>
                </Link>
                {isUserLoggedIn && (
                  <button
                    onClick={handleLogoutClick}
                    className="mx-4 px-6 py-4 bg-custom-secondary text-custom-dark text-sm font-semibold shadow-[inset_0_0_0_0_rgb(219,84,97)] hover:text-custom-light hover:shadow-[inset_15em_0_0_0_rgb(219,84,97)] transition ease-in-out delay-50 duration-300"
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

export default StickyNavbar;
