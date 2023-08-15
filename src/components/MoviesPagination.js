import React from "react";
import ReactPaginate from "react-paginate";
import "./styles/pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPageMovies, searchMovies } from "../redux/actions/moviesAction";

function MoviesPagination() {
  const [pageCount, setPageCount] = React.useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.page);

  useEffect(() => {
    setPageCount(pages > 500 ? 500 : pages);
  }, [pages]);

  const handlePageClick = (e) => {
    const pageNumber = e.selected + 1;
    const searchValue = document.getElementById("search-input").value;
    searchValue === ""
      ? dispatch(getPageMovies(pageNumber))
      : dispatch(searchMovies(searchValue, pageNumber));
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
