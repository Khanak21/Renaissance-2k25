"use client";
import Counter from "./Counter";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";
import "./About.css";

function About() {
  const myRef = useRef();
  const myRef1 = useRef();
  // const [myElementIsVisible, setMyElementIsVisible] = useState(false);
  // const [myElementIsVisible1, setMyElementIsVisible1] = useState(false);
  const [animationsTriggered1, setAnimationsTriggered1] = useState(false);
  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && !animationsTriggered) {

  //           gsap.fromTo(
  //             entry.target,
  //             { opacity: 0, x: 100 },
  //             { opacity: 1, x: 0, ease: "power3.inOut", duration: 1.5 }
  //           );
  //           setAnimationsTriggered1(true);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (myRef1.current) {
  //     observer.observe(myRef1.current);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (myElementIsVisible && !animationsTriggered) {
  //     gsap.fromTo(
  //       myRef.current,
  //       { opacity: 0, x: -100 },
  //       { opacity: 1, x: 0, ease: "power3.inOut", duration: 2 }
  //     );
  //     setAnimationsTriggered(true);
  //   }
  // }, [myElementIsVisible, animationsTriggered]);

  // useEffect(() => {
  //   if (myElementIsVisible1 && !animationsTriggered) {
  //     gsap.fromTo(
  //       myRef1.current,
  //       { opacity: 0, x: 100 },
  //       { opacity: 1, x: 0, ease: "power3.inOut", duration: 2 }
  //     );
  //     setAnimationsTriggered(true);
  //   }
  // }, [myElementIsVisible1, animationsTriggered]);

  return (
    <div>
      {/* div for the main section */}
      <div className="relative h-screen">
        <div className="floating-div absolute top-1/3 left-[25%] md:left-[35%] lg:left-[10%] text-4xl font-extrabold text-left text-custom-secondary lg:text-5xl">
          <p className="tracking-wide text-custom-warm">RENAISSANCE</p>
          <p className="mt-4">8.0</p>
        </div>
        <div className="absolute bottom-[5rem] right-[2rem] md:right-[5rem] text-custom-secondary text-right">
          <span className="text-xl font-bold sm:text-2xl md:text-4xl">10 FEB 2024</span>
          <br />
          <span className="text-base md:text-lg">MNNIT Allahabad, Prayagraj</span>
          <br />
          <Link href="https://forms.gle/yzVk3Lh8mzubKqYFA" target="_blank">
            <button className="p-3 text-base border-2 border-white mt-6 shadow-[inset_0_0_0_0_rgb(219,84,97)] hover:border-custom-accent hover:shadow-[inset_15em_0_0_0_rgb(219,84,97)] transition ease-in-out delay-50 duration-300">
              REGISTER
            </button>
          </Link>
        </div>
      </div>
      {/* div for the about section */}
      <div className="md:flex md:flex-row md:items-center md:h-[30rem] bg-custom-primary">
        {/* div for seat confirmation and heading */}
        <div
          ref={myRef}
          className="left-right relative h-[18rem] md:w-1/3 md:h-[30rem]"
        >
          <div className="font-bold text-custom-warm flex flex-col items-center md:items-end text-lg lg:text-2xl absolute top-1/2 left-[55%] transform -translate-x-3/4 -translate-y-1/2">
            <div className="pb-0 mb-0 text-lg md:text-xl lg:text-2xl">ABOUT</div>

            <div className="text-lg md:text-xl lg:text-2xl"> RENAISSANCE <span className="text-lg md:hidden">8.0</span></div>

            <div className="hidden md:flex md:text-xl lg:text-2xl">8.0</div>
            <p className="mt-2 text-base italic font-normal floating-div md:text-xl text-custom-light">“Octave of pursuit”</p>
            {/* <Link href="/#events">
              <button className="mt-[20px] text-left text-[12px] w-[10.3rem] bg-custom-secondary text-custom-dark p-2 hover:bg-[#e3f1bd] md:w-[10.3rem] transition-all duration-100">
                CONFIRM YOUR SEAT &rarr;
              </button>
            </Link> */}
          </div>
        </div>
        {/* description  */}
        <div
          ref={myRef1}
          className="about-section md:w-2/3 md:h-[30rem] md:py-20 md:px-12"
        >
          <div className="w-full lg:w-3/4">
            <div className="px-10 pb-8 text-base text-justify md:p-12 text-custom-light md:text-lg">
              Renaissance is the annual entrepreneurial summit of MNNIT
              Allahabad that provides a platform for aspiring entrepreneurs to
              encourage the entrepreneurial journey of translating thoughts into
              action. Renaissance includes a gamut of activities all of which
              provide an avenue to harbor entrepreneurial skills and stimulate
              discussion on ideas that possess the potential to turn the issues
              that plague us into opportunities.
            </div>
            <div className="text-[white] flex flex-row px-12 text-sm sm:text-xl md:text-2xl">
              <div className="pb-12 w-1/3 text-left text-[1rem] ">
                <div className="text-[1.5rem] font-semibold text-custom-warm">
                  <Counter last={8} />
                </div>
                Events
              </div>
              <div className="pb-12 w-1/3  text-left  text-[1rem]">
                <div className="text-[1.5rem] font-semibold text-custom-warm">
                  <Counter last={9} />
                </div>
                Speakers
              </div>
              <div className="pb-12 w-1/3  text-left  text-[1rem]">
                <div className="text-[1.5rem] font-semibold text-custom-warm">
                  <Counter last={25} />
                </div>
                Sponsors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
