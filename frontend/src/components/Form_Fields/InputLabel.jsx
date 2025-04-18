// components/InputLabel.js
import React from 'react';

const InputLabel = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-1 my-3 ${className}`}>
      <label htmlFor={name} className="font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...rest}
      />
    </div>
  );
};

export default InputLabel;
