import React from 'react';
import { PaginationButton } from '../../../atoms/ToursListPage/ToursListSection/PaginationButton';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationButton
          key={index + 1}
          label={(index + 1).toString()}
          active={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)}
        />
      ))}
      <PaginationButton
        label="Next"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      />
    </div>
  );
};