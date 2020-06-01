import React from 'react';
import ReactPaginate from 'react-paginate';

import { StyledPaginator } from './styles';

interface IPaginationProps {
  count: number;
  handlePageClick: any;
  currentPage: number;
}

const Pagination: React.FC<IPaginationProps> = ({
  count,
  handlePageClick,
  currentPage,
}) => {
  return (
    <StyledPaginator>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={count / 20}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        activeClassName={'active'}
        initialPage={currentPage}
      />
    </StyledPaginator>
  );
};

export default Pagination;
