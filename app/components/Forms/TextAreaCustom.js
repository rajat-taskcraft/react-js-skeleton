import React from 'react';
import PropTypes from 'prop-types';
const TextAreaCustom = ({
  label,
  limit,
  error,
  value,
  handleChange,
  placeholder,
  className,
  name,
  labelClassName,
}) => {
  return (
    <div className="flex flex-col  gap-1">
      {label && (
        <div className="flex items-center justify-between">
          <label className={`${labelClassName || 'label-sm'} `} htmlFor={label}>
            {label}
          </label>
          {limit && (
            <span className="text-primary-gray text-12">0/{limit}</span>
          )}
        </div>
      )}
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        className={`form-input  h-[150px] py-2 resize-none ${
          error ? 'border-red-500' : 'border-zinc-300'
        } ${className}`}
        placeholder={placeholder}
      />
      {error && <div className="text-12 text-red-500 font-medium">{error}</div>}
    </div>
  );
};
TextAreaCustom.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  label: PropTypes.string,
  limit: PropTypes.number,
};
export default TextAreaCustom;
