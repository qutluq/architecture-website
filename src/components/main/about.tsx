import Image from "next/image";

export const About = () => (
  <div className="mx-10 flex flex-col gap-1 sm:mx-36 lg:mx-60 lg:flex-row lg:gap-10">
    <div className="flex flex-col gap-3">
      <Image
        width={270}
        height={265}
        src="/assets/about-image-1.png"
        objectFit="contain"
      />
      <Image
        width={270}
        height={140}
        src="/assets/about-image-2.png"
        objectFit="contain"
      />
    </div>
    <div className="mt-8 flex items-start justify-center">
      <Image
        width={270}
        height={345}
        src="/assets/about-image-3.png"
        objectFit="contain"
      />
    </div>

    <div className="flex w-full flex-col justify-center gap-5">
      <span className="mt-10 flex justify-center text-xl font-thin capitalize text-gray-400 lg:m-0 lg:block lg:text-5xl xs:text-3xl">
        About
      </span>
      <span className="max-w-lg  text-gray-700 lg:w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </span>
    </div>
  </div>
);
