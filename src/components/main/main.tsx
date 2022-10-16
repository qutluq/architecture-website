import {
  ContactUs,
  MissionStatement,
  OurProjects,
  About,
  ProjectThumbnails,
} from "src/components/main";

export const Main = () => {
  return (
    <div className="relative mx-auto mb-20 flex min-h-full w-full flex-col items-center justify-center gap-24 px-10">
      <ProjectThumbnails />
      <About />
      <MissionStatement />
      <OurProjects />
      <ContactUs />
    </div>
  );
};
