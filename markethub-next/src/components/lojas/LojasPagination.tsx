import { ChevronLeft, ChevronRight } from "lucide-react";

type LojasPaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PAGES: Array<number | string> = [1, 2, 3, 4, 5, "...", 20];

const LojasPagination = ({ currentPage, onPageChange }: LojasPaginationProps) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <button type="button" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#e4e7ec] bg-white text-[#667085] hover:bg-gray-50">
        <ChevronLeft className="h-5 w-5" />
      </button>

      {PAGES.map((page, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-sm font-bold transition ${
            currentPage === page
              ? "bg-violet-600 text-white shadow-sm"
              : "border border-[#e4e7ec] bg-white text-[#667085] hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}

      <button type="button" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#e4e7ec] bg-white text-[#667085] hover:bg-gray-50">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default LojasPagination;
