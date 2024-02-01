import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./Photos";

const Gallery = () => {
  return (
    <div className="m-4 md:m-8">
      <PhotoAlbum
        layout="columns"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          if (containerWidth < 800) return 3;
          return 3;
        }}
      />
      ;
    </div>
  );
};

export default Gallery;
