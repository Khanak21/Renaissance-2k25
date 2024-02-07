"use client";

import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import getAllEventsApi from "../../../api/getAllEvents.api";
import { motion } from "framer-motion";

const Events = () => {
  const [EventsData, setEventsData] = useState([]);

  useEffect(() => {
    getAllEventsApi().then((data) => {
      if (data.success) {
        setEventsData(data.data);
      }
    });
  }, []);

  return (
    <>
      <div id="events" className="w-full">
        <div className="px-10 py-10 mx-auto bg-gradient-to-b from-custom-primary  to-custom-accent  sm:p-8 md:p-12">
          <motion.div
            whileInView={{ y: [150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center pb-12 text-lg font-extrabold sm:pb-14 sm:text-xl lg:pb-16 lg:text-2xl text-[#ffde89]">
              OUR EVENTS
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-center">
              {EventsData.map((e, index) => (
                <div
                  className="relative font-bold min-h-[20em] group rounded-3xl hover:border-dashed hover:border-2 hover:border-[#ffde89] bg-[#27282a] shadow-lg lg:w-[20%]"
                  key={index}
                >
                  <EventCard
                    id={index}
                    title={e.eventName}
                    description={e.description}
                    route={e.route}
                    svg={e.svg}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Events;
