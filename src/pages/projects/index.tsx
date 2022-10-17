import type { NextPage } from "next";
import Head from "next/head";
import { Pagination, usePagination } from "src/components/pagination";
import {
  MockProjects,
  Projects as ProjectsLayout,
} from "src/components/project";

const Projects: NextPage = () => {
  const { items, currentPage, setCurrentPage, totalPages } =
    usePagination(MockProjects);

  return (
    <>
      <Head>
        <title>PROJECTS | Architecture website</title>
        <meta name="description" content="architecture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-24">
        <ProjectsLayout projects={items} />
        <div className="flex w-full flex-row justify-center px-4">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
