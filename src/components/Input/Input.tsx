import React from 'react';
import clsx from 'clsx';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  register?: UseFormRegisterReturn<any>;
  placeholder?: string;
  helperText?: string;
  error: FieldError | undefined;
  className?: string;
  name: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({
  register,
  placeholder,
  error,
  className,
  name,
  label,
  helperText,
}) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <label htmlFor={name} className="font-normal mb-2">
        {label}
      </label>
      <input
        className={clsx(
          'rounded-md p-1 border-2 border-slate-400 outline-none',
          error && 'border-red-600',
        )}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        {...(register || {})}
      />
      {error && (
        <span
          role="alert"
          className="font-light font text-sm mt-1 text-red-600"
        >
          {error.message}
        </span>
      )}
      {helperText && !error && (
        <span className="font-light font text-sm mt-1">{helperText}</span>
      )}
    </div>
  );
};
