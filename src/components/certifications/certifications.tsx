import Image from "next/image";
import type { ProjectType } from "src/components/project";

export const Certifications = () => {
  return (
    <div className="relative mx-auto mb-20 flex min-h-full w-full flex-col items-center justify-center gap-3 px-10 lg:gap-10">
      <div className="flex w-full items-center justify-start xl:justify-center">
        <div className="flex flex-col justify-center gap-0 py-5 text-xl uppercase text-gray-400 lg:gap-1 lg:text-7xl xs:text-3xl">
          <span className="uppercase">company</span>
          <span className="font-medium capitalize text-gray-700">
            certifications
          </span>
        </div>
      </div>
    </div>
  );
};
