import React from 'react';
import PropTypes from 'prop-types';

function Pagination({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
  visiblePages = 5, // Number of visible page buttons
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = startPage; i <= endPage; i += 1) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button type="button" className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="row">
      <ul className="pagination">
        {generatePageNumbers()}
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  visiblePages: PropTypes.number.isRequired,
};

export default Pagination;
