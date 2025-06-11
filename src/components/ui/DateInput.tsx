"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

interface DateInputProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  minDate?: Date;
  disabled?: boolean;
}

export function DateInput({
  selectedDate,
  onChange,
  placeholder = "Select date",
  minDate,
  disabled = false,
}: DateInputProps) {
  return (
    <div className="relative w-full">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat="MMMM d, yyyy"
        minDate={minDate}
        disabled={disabled}
        className="w-full p-2 sm:p-3 rounded-lg border border-[#D1D5DB] bg-white text-sm sm:text-base text-[#1E2A44] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#D6DAFF] transition pr-10"
        wrapperClassName="w-full"
        popperClassName="z-10 sm:max-w-[300px] w-[90vw] left-0 sm:left-auto"
      />
      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#9CA3AF]" />
    </div>
  );
}
