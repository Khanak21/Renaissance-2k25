const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
  { url: "/images/Gallery/gallery1.jpeg", width: 1280, height: 781 },
  { url: "/images/Gallery/gallery2.jpeg", width: 1110, height: 858 },
  { url: "/images/Gallery/gallery3.jpeg", width: 996, height: 862 },
  { url: "/images/Gallery/gallery4.jpeg", width: 919, height: 869 },
  { url: "/images/Gallery/gallery5.jpeg", width: 1096, height: 860 },
  { url: "/images/Gallery/gallery6.jpeg", width: 1280, height: 723 },
  { url: "/images/Gallery/gallery7.jpg", width: 1280, height: 719 },
  { url: "/images/Gallery/gallery8.jpg", width: 4032, height: 3024 },
  { url: "/images/Gallery/gallery9.jpg", width: 5143, height: 4000 },
  { url: "/images/Gallery/gallery10.jpg", width: 5999, height: 3820 },
  { url: "/images/Gallery/gallery11.jpg", width: 5510, height: 3858 },
  { url: "/images/Gallery/gallery12.jpg", width: 5836, height: 2795 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: photo.url,
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.url,
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
