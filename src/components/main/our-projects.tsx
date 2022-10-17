import Image from "next/image";
import { Button } from "src/components/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export const OurProjects = () => (
  <div className="lg:mx-30 mx-10 flex max-w-6xl flex-col justify-start gap-5 sm:mx-16">
    <span className="mt-10 flex justify-center text-xl font-thin capitalize text-gray-400 lg:m-0 lg:block lg:text-5xl xs:text-3xl">
      Our Projects
    </span>

    <div className="flex flex-col gap-7 lg:flex-row">
      <Image
        width={570}
        height={255}
        src="/assets/project-1.png"
        objectFit="contain"
      />
      <Image
        width={570}
        height={255}
        src="/assets/project-2.png"
        objectFit="contain"
      />
    </div>

    <div className="flex flex-col gap-7 lg:flex-row">
      <Image
        width={270}
        height={255}
        src="/assets/project-3.png"
        objectFit="contain"
      />
      <Image
        width={470}
        height={255}
        src="/assets/project-4.png"
        objectFit="contain"
      />

      <Image
        width={370}
        height={255}
        src="/assets/project-5.png"
        objectFit="contain"
      />
    </div>
    <div className="flex w-full justify-center lg:justify-end">
      <Button className="w-48 bg-gray-700">
        <span className="uppercase">all projects&nbsp;</span>
        <ArrowLongRightIcon className="inline w-6" />
      </Button>
    </div>
  </div>
);
