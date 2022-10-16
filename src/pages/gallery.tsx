import type { NextPage } from "next";
import Head from "next/head";
import { Gallery as GalleryLayout } from "src/components/gallery";
import { Pagination, usePagination } from "src/components/pagination";

const images = [
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
  "/assets/gallery-5.png",
  "/assets/gallery-6.png",
  "/assets/gallery-7.png",
  "/assets/gallery-8.png",
  "/assets/gallery-9.png",
  "/assets/gallery-10.png",
];

const Gallery: NextPage = () => {
  const { items, currentPage, setCurrentPage, totalPages } =
    usePagination(images);

  return (
    <>
      <Head>
        <title>Gallery | Architecture website</title>
        <meta name="description" content="architecture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-24">
        <GalleryLayout images={items} />
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

export default Gallery;
