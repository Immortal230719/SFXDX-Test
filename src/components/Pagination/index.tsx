import React from 'react';
import ReactPaginate from 'react-paginate';

import { StyledPaginator } from './styles';

interface IPaginationProps {
  data: any;
  handlePageClick: any;
}

const Pagination: React.FC<IPaginationProps> = ({ data, handlePageClick }) => {
  const { count } = data;

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
      />
    </StyledPaginator>
  );
};

export default Pagination;
