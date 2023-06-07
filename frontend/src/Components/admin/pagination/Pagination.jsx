import React, { useState } from 'react';
import './Pagination.css'

const Pagination = ({ currentPag, onPageChange, length }) => {
    const [currentPage, setCurrentPage] = useState(currentPag);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
        onPageChange(currentPage + 1);
    };

    return (
        <div className="pagination">
            <button
                className="prev-button"
                disabled={currentPage === 1}
                onClick={handlePrevClick}
            >
                Previous
            </button>

            <span className="page-info">Page {currentPage}</span>

            <button
                className="next-button"
                onClick={handleNextClick}
                disabled={length < 8}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
