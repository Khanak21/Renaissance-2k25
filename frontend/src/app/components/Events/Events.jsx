"use client";

import React, { useEffect } from "react";
import EventCard from "./EventCard";
import { motion, useAnimation } from "framer-motion";
import { EventsData } from "./data";
import { useInView } from "react-intersection-observer";

const Events = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        id="events"
        className="w-full"
        variants={container}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <div className="px-10 py-10 mx-auto bg-black sm:p-8 md:p-12">
          <div
            className="flex items-center justify-center pb-12 text-lg font-extrabold sm:pb-14 sm:text-xl lg:pb-16 lg:text-2xl text-[#ffde89]"
          >
            OUR EVENTS
          </div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-center">
            {/* <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
            {EventsData.map((e, index) => (
              <EventCard
                id={index}
                title={e.title}
                description={e.desc}
                route={e.route}
                svg={e.svg}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Events;
