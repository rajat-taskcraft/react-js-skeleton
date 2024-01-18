import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';
const CustomButton = ({
  className,
  loading,
  disabled = false,
  handleClick,
  children,
  type,
}) => {
  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      onClick={handleClick}
      className={`disabled:opacity-50 relative disabled:cursor-not-allowed ${className} ${
        loading && 'cursor-not-allowed'
      }`}
    >
      {loading && (
        <BeatLoader color="#ffffff" className="absolute ax-center z-[1]" />
      )}
      <div className={`btn ${loading && 'opacity-0'}`}>{children}</div>
    </button>
  );
};
CustomButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
export default CustomButton;
