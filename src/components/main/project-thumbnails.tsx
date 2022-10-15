import Image from "next/image";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import { Button } from "src/components/button";

export const ProjectThumbnails = () => (
  <div className=" flex flex-col items-center justify-between lg:flex-row">
    <div className="flex h-full flex-col items-center justify-center gap-10 first-line:w-full lg:mx-10 lg:w-1/3">
      <div className="flex justify-center gap-3 py-5 text-xl uppercase text-gray-400 lg:flex-col lg:gap-0 lg:text-7xl xs:text-3xl">
        Project
        <span className="font-medium capitalize text-gray-700">Lorum</span>
      </div>
      <div className="hidden gap-10 lg:flex">
        <Button variant="text" className="border-0">
          <ArrowLongLeftIcon
            className="inline w-6 text-gray-700"
            aria-hidden="true"
          />
        </Button>
        <Button variant="text" className="border-0">
          <ArrowLongRightIcon
            className="inline w-6 text-gray-700"
            aria-hidden="true"
          />
        </Button>
      </div>
      <div className="hidden gap-3 lg:flex">
        <span>1</span>
        <span>/</span>
        <span>2</span>
      </div>
    </div>
    <div className="relative flex w-full items-center justify-center lg:w-2/3 lg:justify-start">
      <div className="items-baseline lg:ml-10">
        <Image width={770} height={829} src="/assets/building-image.png" />
      </div>
      <Button
        variant="text"
        className="w-50 absolute bottom-0 left-0 z-50 flex items-center border-0 bg-white p-3 lg:ml-10"
      >
        <span className="uppercase text-gray-700">view project</span>
        &nbsp;&nbsp;&nbsp;
        <ArrowLongRightIcon
          className="inline w-6 text-gray-700"
          aria-hidden="true"
        />
      </Button>
    </div>
    <div className="mt-5 flex gap-10 lg:hidden">
      <ArrowLongLeftIcon className="inline w-6" aria-hidden="true" />
      <ArrowLongRightIcon className="inline w-6" aria-hidden="true" />
    </div>
    <div className="flex gap-3 lg:hidden">
      <span>1</span>
      <span>/</span>
      <span>2</span>
    </div>
  </div>
);
