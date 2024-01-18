import React from 'react';
import { reactIcons } from '../../utils/icons';
import PropTypes from 'prop-types';
const CloseButton = ({ className, handleClose }) => {
  return (
    <button
      onClick={handleClose}
      className={`${className} flex-center  w-10 h-10 duration-300 hover:bg-zinc-100 rounded-md text-28 text-black/70`}
    >
      {reactIcons.close}
    </button>
  );
};
CloseButton.propTypes = {
  className: PropTypes.string,
  handleClose: PropTypes.func,
};
export default CloseButton;
