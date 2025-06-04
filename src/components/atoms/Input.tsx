import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  register: UseFormRegister<T>;
  error?: string;
}

export const Input = <T extends FieldValues>({
  label,
  name,
  type,
  register,
  error,
}: InputProps<T>) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        {...register(name)}
        type={type}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
