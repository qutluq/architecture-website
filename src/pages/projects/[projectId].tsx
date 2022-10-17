import { Project as ProjectLayout, MockProjects } from "src/components/project";
import type { ProjectType } from "src/components/project";

const Project = ({ project }: { project: ProjectType }) => {
  return <ProjectLayout project={project} />;
};

export const getStaticPaths = () => {
  const paths = MockProjects.map((project) => ({
    params: { projectId: String(project.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }: { params: any }) => {
  const project = MockProjects.filter(
    (project) => params.projectId === project.id
  )[0];

  return {
    props: {
      project: project,
    },
  };
};

export default Project;
