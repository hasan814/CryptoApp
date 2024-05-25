import React, { useState } from "react";
import { PaginationDiv } from "../styles/PaginationDiv";

const Pagination = ({ page, setPage }) => {
  // =========== Functions ==============
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  // =========== Rendering ==============
  return (
    <PaginationDiv>
      <button
        onClick={previousHandler}
        className={page === 1 ? "disabled" : null}
      >
        previous
      </button>
      <p className={page === 1 ? "selected" : null}>1</p>
      <p className={page === 2 ? "selected" : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className="selected">{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page === 9 ? "selected" : null}>9</p>
      <p className={page === 10 ? "selected" : null}>10</p>
      <button onClick={nextHandler} className={page === 10 ? "disabled" : null}>
        next
      </button>
    </PaginationDiv>
  );
};

export default Pagination;
