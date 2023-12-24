import React from 'react';
import PropTypes from 'prop-types';

function Pagination({
  totalItems,
  itemsPerPage = 5,
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
        <li key={i}>
          <button
            type="button"
            className={`page-link mt-2 mr-2 btn ${currentPage === i ? 'btn-primary' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>,
      );
    }
  
    return (
      <div>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          {pageNumbers}
        </ul>
    </div>
    );
  };
  
  return (
    <div>
        {generatePageNumbers()}
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
