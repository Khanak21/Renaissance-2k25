import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./Photos";
import { motion } from "framer-motion";
// import NextJsImage from "./NextJsImage";

const Gallery = () => {
  return (
    <div className="m-4 md:m-8">
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-10 px-8">
          Our Events Gallery
        </h2>
      </motion.div>
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <PhotoAlbum
          layout="columns"
          // renderPhoto={NextJsImage}
          photos={photos}
          columns={(containerWidth) => {
            if (containerWidth < 400) return 2;
            if (containerWidth < 800) return 3;
            return 3;
          }}
        />
      </motion.div>
    </div>
  );
};

export default Gallery;
