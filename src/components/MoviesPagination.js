import React from "react";
import ReactPaginate from "react-paginate";
import "./styles/pagination.css";

function MoviesPagination({ getMoviesByPage, pageCount }) {
  const handlePageClick = (e) => {
    const pageNumber = e.selected + 1;
    console.log(pageNumber);
    getMoviesByPage(pageNumber);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      // styling stuff
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      activeClassName={"active"}
      previousClassName={"page-item "}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link prev"}
      nextLinkClassName={"page-link next"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
    />
  );
}

export default MoviesPagination;
