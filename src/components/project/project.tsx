import Image from "next/image";
import type { ProjectType } from "src/components/project";

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="relative mx-auto mb-20 flex min-h-full w-full flex-col items-center justify-center gap-3 px-10 lg:gap-10">
      <div className="flex w-full items-center justify-start xl:justify-center">
        <div className="flex flex-col justify-center gap-0 py-5 text-xl uppercase text-gray-400 lg:gap-1 lg:text-7xl xs:text-3xl">
          {project.title}
        </div>
      </div>

      <div className="flex w-full max-w-6xl flex-row justify-center">
        <Image
          width={1170}
          height={435}
          src={project.featuredImage}
          objectFit="cover"
        />
      </div>

      {project.images.length > 0 && (
        <div className="flex w-full max-w-6xl flex-col justify-center sm:block">
          <div className="flex flex-row justify-center pb-3 sm:float-left sm:w-1/3 sm:pr-7 sm:pb-0">
            <Image
              width={425}
              height={425}
              src={project.images[0]}
              objectFit="fill"
            />
          </div>

          <p>{project.content}</p>
        </div>
      )}

      {project.images.length > 1 && (
        <div className="flex w-full max-w-6xl flex-row items-center justify-center">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {project.images.slice(1).map((image) => (
              <Image
                key={image}
                width={425}
                height={425}
                src={image}
                objectFit="fill"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
