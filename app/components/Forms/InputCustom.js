import React from 'react';
import PropTypes from 'prop-types';
const InputCustom = ({
  label,
  error,
  className,
  labelClassName,
  type,
  addon,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <div className="flex items-center justify-between">
          <label className={`${labelClassName || 'label-sm'}`} htmlFor={label}>
            {label}
          </label>
        </div>
      )}
      <div className="relative w-full">
        {addon && (
          <div className="w-12 h-full ay-center border-r flex-center text-primary-gray border-r-zinc-300">
            {addon}
          </div>
        )}
        <input
          type={type || 'text'}
          id={label}
          className={`form-input w-full resize-none ${
            error ? 'border-red-500' : 'border-zinc-300'
          } ${className}`}
          {...rest}
        />
      </div>
      {error && <div className="text-12 text-red-500 font-medium">{error}</div>}
    </div>
  );
};
InputCustom.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  addon: PropTypes.string,
};
export default InputCustom;
