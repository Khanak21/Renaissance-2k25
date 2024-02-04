import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
// import getBase64 from "../../lib/getLocalBase64";
import { getPlaiceholder } from "plaiceholder";

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  getImage(photo.src).then((myBlurDataUrl) => {
    return (
      <div style={{ ...wrapperStyle, position: "relative" }}>
        <Image
          fill
          src={photo}
          placeholder="blur"
          blurDataURL={myBlurDataUrl.base64}
          {...{ alt, title, sizes, className, onClick }}
        />
      </div>
    );
  });
}
