import React from 'react';
import PropTypes from 'prop-types';
import { reactIcons } from './../../utils/icons';

const FormNativeSelect = ({
  options,
  name,
  handleChange,
  value,
  index = 0,
  error,
  className,
}) => {
  return (
    <div
      className={`flex  items-center border  rounded-md bg-white ${
        error ? ' border-red-500 ' : 'border-zinc-200'
      } ${className}`}
    >
      <div className="form-select-custom relative ">
        <select
          name={name}
          id={name}
          className=""
          value={value}
          onChange={(e) => handleChange(e, index)}
        >
          <option value="">Please select</option>
          {options?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <span className="ay-center z-[3] pointer-events-none text-primary-gray text-18 right-2">
          {reactIcons.arrowdown}
        </span>
      </div>
    </div>
  );
};
FormNativeSelect.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};
export default FormNativeSelect;
