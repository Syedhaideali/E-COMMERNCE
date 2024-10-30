
import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='default-pagination lab-ul'>
            <li>
                <a href='#' onClick={() => {
                    if (activePage > 1) { // Ensure it doesn't go below 1
                        paginate(activePage - 1)
                    }
                }}>
                    <i className='icofont-rounded-left'></i> {/* Previous icon */}
                </a>
            </li>
            {
                pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                        <button onClick={() => paginate(number)} className='bg-transparent'>
                            {number}
                        </button>
                    </li>
                ))
            }
            <li>
                <a href='#' onClick={() => {
                    if (activePage < pageNumbers.length) { // Ensure it doesn't exceed total pages
                        paginate(activePage + 1)
                    }
                }}>
                    <i className='icofont-rounded-right'></i> {/* Next icon */}
                </a>
            </li>
        </ul>
    );
};

export default Pagination;
