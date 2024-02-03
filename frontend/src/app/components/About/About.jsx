"use client";
import Counter from "./Counter";
import gsap from "gsap";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./About.css";

function About() {

  const myRef = useRef();
  const myRef1 = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState(false);
  const [myElementIsVisible1, setMyElementIsVisible1] = useState(false);
  const [animationsTriggered, setAnimationsTriggered] = useState(false);

  const handleScroll = () => {
    if (myRef.current) {
      const rect = myRef.current.getBoundingClientRect();
      setMyElementIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }
    if (myRef1.current) {
      const rect1 = myRef1.current.getBoundingClientRect();
      setMyElementIsVisible1(rect1.top < window.innerHeight && rect1.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (myElementIsVisible && !animationsTriggered) {
      gsap.fromTo(
        myRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, ease: "power3.inOut", duration: 2 }
      );
      setAnimationsTriggered(true);
    }
  }, [myElementIsVisible, animationsTriggered]);

  useEffect(() => {
    if (myElementIsVisible1 && !animationsTriggered) {
      gsap.fromTo(
        myRef1.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, ease: "power3.inOut", duration: 2 }
      );
      setAnimationsTriggered(true); 
    }
  }, [myElementIsVisible1, animationsTriggered]);

  return (
    <div>
      {/* div for the main section */}
      <div className="relative  h-screen ">
        <div className="floating-div font-['Raleway'] absolute top-1/2 left-[25%] md:left-[35%] lg:left-[40%]  text-4xl sm:text-6xl text-left text-[white]">
          RENAISSANCE <br />
          <span className="transform  text-white">8.0</span>
        </div>
        <div className="absolute bottom-[5rem] right-[2rem] md:right-[5rem] text-white font-['Raleway'] text-right text-xs">
          <span className="text-xl sm:text-2xl md:text-4xl">11 FEB 2024</span>
          <br />
          <span className="">MNNIT Allahabad,Prayagraj</span>
          <br />
          <button className="p-3 border-2 border-white mt-6 shadow-[inset_0_0_0_0_rgb(132,169,140)] hover:border-[#84A98C] hover:shadow-[inset_15em_0_0_0_rgb(132,169,140)] transition ease-in-out delay-50 duration-300">
            BUY TICKET
          </button>
        </div>
      </div>
      {/* div for the about section */}
      <div className="md:flex md:flex-row md:items-center md:h-[30rem] bg-gray-800">
        {/* div for seat confirmation and heading */}
        <div
          ref={myRef}
          className="left-right relative h-[18rem] md:w-1/3 md:h-[30rem]"
        >
          <div className="text-4xl font-['Raleway'] absolute top-1/2 left-[55%] transform -translate-x-3/4 -translate-y-1/2 text-[#354F52] ">
            <div className="text-white pb-0 mb-0 pl-4">ABOUT</div>
            
            <div className="text-white pl-3">    DESIGN</div>
            
            <div className="text-white pl-5">WEEK</div>
            
            <button className="mt-[20px] text-left text-[12px] text-white bg-[#354F52] p-2 hover:bg-[#2F3E46] md:w-[10rem]">
              CONFIRM YOUR SEAT &rarr;
            </button>
          </div>
        </div>
        {/* description  */}
        <div
          ref={myRef1}
          className="about-section md:w-2/3 md:h-[30rem] md:py-20 md:px-12"
        >
          <div className="w-full lg:w-3/4">
            <div className="text-[white] text-left p-12">
              Renaissance is the annual entrepreneurial summit of MNNIT
              Allahabad that provides a platform for aspiring entrepreneurs to
              encourage the entrepreneurial journey of translating thoughts into
              action. Renaissance includes a gamut of activities all of which
              provide an avenue to harbor entrepreneurial skills and stimulate
              discussion on ideas that possess the potential to turn the issues
              that plague us into opportunities.{" "}
            </div>
            <div className="text-[white] flex flex-row px-12 text-sm sm:text-xl md:text-2xl">
              <div className="pb-12 w-1/3 text-left ">
                <div className="text-3xl font-semibold text-[white]">
                  <Counter last={8} />
                </div>
                Events
              </div>
              <div className="pb-12 w-1/3  text-left">
                <div className="text-3xl font-semibold text-[white]">
                  <Counter last={9} />
                </div>
                Speakers
              </div>
              <div className="pb-12 w-1/3  text-left ">
                <div className="text-3xl font-semibold text-[white]">
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
