import React from "react";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-8">
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            key={index}
            className={`px-4 py-2 cursor-pointer rounded-md border border-white/20 transition
              ${page === currentPage
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-white hover:text-black"}
               `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
