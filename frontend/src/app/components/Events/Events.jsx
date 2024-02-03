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
        <div className="w-full bg-gray-100 rounded-lg p-4 my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {EventsData.map((e, index) => (
            <motion.div key={index} className="event-item" variants={item}>
              <EventCard
                title={e.title}
                description={e.description}
                route={e.route}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Events;
