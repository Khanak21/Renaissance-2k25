"use client";

import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import getAllEventsApi from "../../../api/getAllEvents.api";
import { renaissance2025Events } from "./renaissance2025Data";
import { motion } from "framer-motion";

const Events = () => {
  const [EventsData, setEventsData] = useState([]);

  useEffect(() => {
    getAllEventsApi().then((data) => {
      if (data.success) {
        // Merge backend events with Renaissance 2025 events
        const combinedEvents = [...data.data, ...renaissance2025Events];
        setEventsData(combinedEvents);
      } else {
        // If API fails, show Renaissance 2025 events as fallback
        setEventsData(renaissance2025Events);
      }
    }).catch((error) => {
      // Handle API errors gracefully by showing Renaissance 2025 events
      console.error("Failed to fetch events from API:", error);
      setEventsData(renaissance2025Events);
    });
  }, []);

  return (
    <>
      <div id="events" className="w-full relative">
        {/* Curved top separator */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-custom-primary"></path>
          </svg>
        </div>

        <div className="px-10 py-10 mx-auto bg-gradient-to-b from-custom-primary  to-custom-accent  sm:p-8 md:p-12 pt-16">
          <motion.div
            whileInView={{ y: [150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center pb-12 text-lg font-extrabold sm:pb-14 sm:text-xl lg:pb-16 lg:text-2xl text-[#ffde89]">
              OUR EVENTS
            </div>

            {/* Static Grid Layout */}
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-center">
              {EventsData.map((e, index) => (
                <div
                  className="relative font-bold min-h-[20em] rounded-3xl border-2 border-transparent hover:border-dashed hover:border-[#ffde89] bg-[#27282a] shadow-lg lg:w-[20%] transition-colors duration-200"
                  key={index}
                >
                  <EventCard
                    id={index}
                    title={e.eventName}
                    description={e.description}
                    route={e.route}
                    svg={e.svg || ""}
                    showNumber={false}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-custom-accent"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Events;
