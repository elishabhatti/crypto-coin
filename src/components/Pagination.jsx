import React from "react";

const Pagination = ({ totalPosts, postPerPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-8">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className="px-4 py-2 rounded-md border border-white/20 text-white bg-black hover:bg-white hover:text-black transition dark:bg-black dark:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
