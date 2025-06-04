import React from 'react';

interface FilterCheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ label, value, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-700">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="h-4 w-4 text-[#28a745] border-gray-300 rounded focus:ring-[#28a745]"
      />
      <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</span>
    </label>
  );
};