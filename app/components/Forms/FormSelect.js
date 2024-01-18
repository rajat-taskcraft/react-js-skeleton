import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { reactIcons } from '../../utils/icons';
const FormSelect = ({ option, value, handleChange, style }) => {
  const colourStyles = {
    control: (base) => ({
      ...base,
      border: !style?.borderNone ? '1px solid  #ccc' : 0,
      paddingLeft: style?.paddingLeft || '8px',
      paddingRight: style?.paddingRight || '16px',
      background: '#fff',
      color: 'white',
      outline: 'none',
      borderRadius: style?.borderRadius || '40px',
      height: style?.height || '40px',
      width: '100%',
      boxShadow: 'none',
      '&:hover': {
        border: !style?.borderNone ? '1px solid #cdcdcd !important' : 0,
      },
    }),
    menuList: (styles) => ({
      ...styles,
      background: '#ffffff',
      color: 'black',
      padding: 0,
      borderRadius: '4px',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      background: '#fff',
      color: 'black',
      padding: '0 5px',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: '#6D5AE6',
        color: '#fff',
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: 'black',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: 'black',
    }),

    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none',
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      display: 'none',
    }),
    option: (styles, { isSelected, isDisabled }) => ({
      ...styles,
      cursor: 'pointer',
      color: isSelected ? '#fff' : 'black',
      background: isSelected ? '#6D5AE6' : '#fff',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? '#6D5AE6'
            : '#fff'
          : undefined,
        color: !isDisabled ? (isSelected ? '#fff' : '#000000') : undefined,
      },
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
      background: '#ffffff',
    }),
  };

  return (
    <div className="relative w-full">
      <Select
        defaultValue={option[0]}
        name="form-select"
        options={option}
        className="basic-multi-select"
        classNamePrefix="select"
        selectProps="any"
        styles={colourStyles}
        value={value || option[0]}
        onChange={handleChange}
      />
      <span className="ay-center z-[3] pointer-events-none text-primary-gray text-18 right-2">
        {reactIcons.arrowdown}
      </span>
    </div>
  );
};
FormSelect.propTypes = {
  option: PropTypes.array,
  value: PropTypes.object,
  handleChange: PropTypes.func,
  style: PropTypes.object,
};
export default FormSelect;
