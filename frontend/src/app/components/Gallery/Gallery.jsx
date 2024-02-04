import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./Photos";
import { motion } from "framer-motion";
import NextJsImage from "./NextJsImage";

const Gallery = () => {
  return (
    <div className="px-0 md:px-12 lg:px-20 m-4 mt-10">
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg lg:text-2xl font-bold text-center mb-4 px-8">
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
