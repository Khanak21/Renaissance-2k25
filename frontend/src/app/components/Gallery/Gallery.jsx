import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./Photos";
import { motion } from "framer-motion";
import NextJsImage from "./NextJsImage";

const Gallery = () => {
  return (
    <div className="px-0 md:px-12 lg:px-20 pt-10 bg-custom-light">
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="px-8 mb-4 text-lg font-bold text-center lg:text-2xl">
          OUR EVENTS GALLERY
        </h2>
      </motion.div>
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <PhotoAlbum
          layout="columns"
          renderPhoto={NextJsImage}
          photos={photos}
          columns={(containerWidth) => {
            if (containerWidth < 400) return 2;
            if (containerWidth < 800) return 3;
            return 4;
          }}
        />
      </motion.div>
    </div>
  );
};

export default Gallery;
