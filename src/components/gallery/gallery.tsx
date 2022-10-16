import Image from "next/image";

type PropTypes = {
  images: string[]
}

export const Gallery = ({images}: PropTypes) => {
  return (
    <div className="relative mx-auto mb-20 flex min-h-full w-full flex-col items-center justify-center gap-3 px-10 lg:gap-10">
      <div className="flex w-full items-center justify-start xl:justify-center">
        <div className="flex flex-col justify-center gap-0 py-5 text-xl uppercase text-gray-400 lg:gap-3 lg:text-7xl xs:text-3xl">
          Photo
          <span className="font-medium capitalize text-gray-700">Gallery</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((image) => (
          <Image
            key={image}
            width={270}
            height={345}
            src={image}
            objectFit="contain"
          />
        ))}
      </div>
    </div>
  );
};
