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
    <div className="flex justify-center mt-4 animate-fade-in py-10">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
        disabled={currentPage === 0}
        className="px-4 py-2 mx-2 text-orange-500 border border-orange-500 rounded transition duration-300"
      >
        Previous
      </button>
      <span className="mx-2 text-lg">
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
        }
        disabled={currentPage === totalPages - 1}
        className={`px-4 py-2 mx-2 text-orange-500 border border-orange-500 transition duration-300 rounded`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
