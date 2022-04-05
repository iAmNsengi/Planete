import { IconMailForward } from "@tabler/icons-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
}
const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center mt-4 animate-fade-in py-10">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
        disabled={currentPage === 0}
        className="px-4 py-2 mx-2 cursor-pointer border disabled:cursor-not-allowed border-cyan-800 text-cyan-800 rounded transition duration-300"
      >
        <FaChevronLeft />
      </button>
      <span className="mx-2 text-lg">
        {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
        }
        disabled={currentPage === totalPages - 1}
        className={`px-4 py-2 mx-2 disabled:cursor-not-allowed border-cyan-800 text-cyan-800 border transition duration-300 rounded`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
