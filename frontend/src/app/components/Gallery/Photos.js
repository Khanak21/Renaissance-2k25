const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
  { url: "/images/Gallery/gallery1.jpeg", width: 1080, height: 800 },
  { url: "/images/Gallery/gallery2.jpeg", width: 1080, height: 1620 },
  { url: "/images/Gallery/gallery3.jpeg", width: 1080, height: 720 },
  { url: "/images/Gallery/gallery4.jpeg", width: 1080, height: 721 },
  { url: "/images/Gallery/gallery5.jpeg", width: 1080, height: 1620 },
  { url: "/images/Gallery/gallery6.jpeg", width: 1080, height: 607 },
  { url: "/images/Gallery/gallery1.jpeg", width: 1080, height: 608 },
  { url: "/images/Gallery/gallery2.jpeg", width: 1080, height: 720 },
  { url: "/images/Gallery/gallery3.jpeg", width: 1080, height: 1549 },
  { url: "/images/Gallery/gallery4.jpeg", width: 1080, height: 720 },
  { url: "/images/Gallery/gallery5.jpeg", width: 1080, height: 694 },
  { url: "/images/Gallery/gallery6.jpeg", width: 1080, height: 1620 },
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
