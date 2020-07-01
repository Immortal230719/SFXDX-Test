import React from 'react';
import ReactPaginate from 'react-paginate';

import { StyledPaginator } from './styles';

type selectedItem = {
  selected: number;
};

type PaginationProps = {
  count: number;
  handlePageClick: (selected: selectedItem) => void;
  currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  handlePageClick,
  currentPage,
}) => (
  <StyledPaginator>
    <ReactPaginate
      previousLabel="previous"
      nextLabel="next"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={count / 20}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      activeClassName="active"
      initialPage={currentPage}
    />
  </StyledPaginator>
);
