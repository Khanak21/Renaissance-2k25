"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import sponsorLogo1 from "./sponsorLogo1.png";
import gsap from "gsap";

// SponsorCard component
const SponsorCard = ({ logo, rowNumber, index, cardRefs }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const direction = index % 2 === 0 ? "right" : "left";
   
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
         
          tl.set(cardElement,  { x: direction === "right" ? "100%" : "-100%", opacity: 0 });
          tl.fromTo(
            cardElement,
            { x: direction === "right" ? "100%" : "-100%", opacity: 0 },
            {
              x: "0%",
              opacity: 1,
              duration: 1,
              stagger: 0.2,
              onComplete: () => {
                // Clear only the transform property
                gsap.set(cardElement, { clearProps: "transform" });
              },
            },
            0 // Start all cards at once
          );

          // Unobserve after animation is triggered
          observer.unobserve(cardElement);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    // Start observing the card element
    observer.observe(cardElement);

    return () => {
      // Cleanup: disconnect the observer when the component is unmounted
      observer.disconnect();
    };
  }, [cardRefs, index]);

  return (
    <div
      ref={cardRef}
      className="z-2 my-2 transform hover:scale-105 transition-transform duration-300 ease-out w-[60%] h-full sm:w-auto border-2 border-[#EEF5DB] rounded-lg shadow-md flex flex-col m-auto overflow-hidden opacity-0"
    >
      <Image src={logo} className="object-contain w-full h-[80%]" alt={`logo`} />
      <div className="w-full h-[20%] text-3xl bg-[#EEF5DB] flex items-center justify-center text-[#1D174F] font-bold">
        E-cell
      </div>
    </div>
  );
};

// Sponsors component
const Sponsors = () => {
  const cardRefs = useRef([]);

  return (
    <div className=" ">
      <div className="top-[10vw] flex flex-col justify-center items-center w-full h-full sm:px-[10%] bg-gray-800">
        {/* headings */}
        <h1 className="text-[6vw] sm:text-[3vw] font-bold text-[#FFDE89] mt-3">
          <span className="text-[7vw] sm:text-[4vw]">O</span>UR{" "}
          <span className="text-[7vw] sm:text-[4vw]">S</span>PONSORSHIPS
        </h1>
        <h1 className="text-[8vw] sm:text-[5vw] font-bold text-[#FFDE89] ">
          <span className="text-[9vw] sm:text-[6vw]">O</span>FFICIAL{" "}
          <span className="text-[9vw] sm:text-[6vw]">S</span>PONSORS
        </h1>

        {/* First row */}
        <div className="grid grid-cols-1 my-6 py-5 gap-4 sm:w-[25%] overflow-hidden">
          {[sponsorLogo1].map((logo, index) => (
            <SponsorCard
              key={`row1_card${index}`}
              logo={logo}
              rowNumber={1}
              index={index * 2}
              cardRefs={cardRefs}
            />
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 my-6 py-5 gap-4 sm:w-[80%] overflow-hidden">
          {[sponsorLogo1, sponsorLogo1, sponsorLogo1].map((logo, index) => (
            <SponsorCard
              key={`row2_card${index}`}
              logo={logo}
              rowNumber={2}
              index={index * 2 + 1}
              cardRefs={cardRefs}
            />
          ))}
        </div>

        {/* Third row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 my-6 gap-4">
          {[sponsorLogo1, sponsorLogo1, sponsorLogo1, sponsorLogo1].map(
            (logo, index) => (
              <SponsorCard
                key={`row3_card${index}`}
                logo={logo}
                rowNumber={3}
                index={index * 2 + 2}
                cardRefs={cardRefs}
              />
            )
          )}
        </div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
};

export default Sponsors;
