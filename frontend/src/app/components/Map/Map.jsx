import React from "react";
import { motion } from "framer-motion";
const MapLocation = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="my-2 p-4 w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14405.129734464535!2d81.85725744999999!3d25.49562555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1706642825994!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
};

export default MapLocation;
