import type { ProjectType } from "./types";
import Image from "next/image";
import { Button } from "src/components/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className="relative mx-auto mb-20 flex min-h-full w-full flex-col items-center justify-center gap-3 px-10 lg:gap-10">
      <div className="flex w-full items-center justify-start xl:justify-center">
        <div className="flex flex-col justify-center gap-0 py-5 text-xl uppercase text-gray-400 lg:gap-1 lg:text-7xl xs:text-3xl">
          Our
          <span className="font-medium capitalize text-gray-700">Projects</span>
        </div>
      </div>

      <div className="flex flex-col md:gap-3">
        {projects.map((project) => (
          <div
            className="relative flex flex-row items-start gap-3"
            key={project.id}
          >
            <div className="mt-10 hidden  md:block">
              <Image
                width={670}
                height={435}
                src={project.featuredImage}
                objectFit="cover"
              />
            </div>
            <div className="w-1/3 md:hidden">
              <Image
                width={200}
                height={300}
                src={project.featuredImage}
                objectFit="cover"
              />
            </div>
            <div className="flex w-7/12 flex-col pl-3 pt-3 sm:py-10 md:w-5/12 md:gap-3">
              <span className="max-w-lg  text-lg text-gray-400 sm:text-xl lg:w-full lg:text-4xl">
                {project.title}
              </span>
              <span className="h-20 max-w-sm truncate whitespace-normal sm:h-36 lg:h-48">
                {project.description}
              </span>
              <Button
                variant="text"
                className="hidden w-48 items-center gap-3 border-0 bg-white p-3 sm:flex md:mt-10 lg:ml-10"
                href={`/projects/${project.id}`}
              >
                <span className="inline uppercase text-gray-700">
                  view project
                </span>
                <ArrowLongRightIcon
                  className="inline w-6 text-gray-700"
                  aria-hidden="true"
                />
              </Button>
            </div>
            <Button
              variant="text"
              className="absolute bottom-3 right-0 flex w-1/12 items-center gap-3 border-0 bg-white sm:hidden md:mt-10 lg:ml-10"
              href={`/project/${project.id}`}
              hasPadding={false}
            >
              <ArrowLongRightIcon
                className="w-5 text-gray-700"
                aria-hidden="true"
              />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
