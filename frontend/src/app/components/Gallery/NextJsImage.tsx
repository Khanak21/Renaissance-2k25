import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

const dataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAABJ0AAASdAHeZh94AAAAHElEQVQoU2Nsa2j4z0AEYILSBMGoQryASIUMDAAT2gKZGEeGWgAAAABJRU5ErkJggg==";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder="blur"
        loading="lazy"
        blurDataURL={dataUrl}
        style={{ objectFit: "cover", objectPosition: "left top" }}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}
