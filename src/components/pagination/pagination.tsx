import { useEffect, useState } from "react";
import { Button } from "src/components/button";
import { PageSize } from "src/config";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";

const paginateData = (data: any[], currentPage: number) => {
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = startIndex + PageSize;
  return data.slice(startIndex, endIndex);
};

export const usePagination = (allItems: any[]) => {
  const totalPages = Math.ceil(allItems.length / PageSize);
  const [items, setItems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const paginated = paginateData(allItems, 1);
    setItems(paginated);
  }, []);

  useEffect(() => {
    const paginated = paginateData(allItems, currentPage);
    setItems(paginated);
  }, [currentPage]);

  return {
    items,
    allItems,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

type PaginationType = {
  currentPage: number;
  setCurrentPage: Function;
  totalPages: number;
};

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationType) => {
  const handleClickPrevious = (page: number) => {
    if (page < 1) return;
    setCurrentPage(page);
  };

  const handleClickNext = (page: number) => {
    if (page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <nav
      className="flex flex-row items-center justify-start gap-5 border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <p className="text-sm text-gray-700">
        <span className="font-medium">
          {currentPage}/{totalPages}
        </span>
      </p>
      <div className="flex flex-row gap-1 sm:justify-end">
        <Button
          variant="text"
          className="border-0"
          onClick={() => handleClickPrevious(currentPage - 1)}
        >
          <ArrowLongLeftIcon
            className="inline w-6 text-gray-700"
            aria-hidden="true"
          />
        </Button>

        <Button
          variant="text"
          className="border-0"
          onClick={() => handleClickNext(currentPage + 1)}
        >
          <ArrowLongRightIcon
            className="inline w-6 text-gray-700"
            aria-hidden="true"
          />
        </Button>
      </div>
    </nav>
  );
};
