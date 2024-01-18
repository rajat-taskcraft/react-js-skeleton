import React from 'react';
import { useNavigate } from 'react-router-dom';
import { reactIcons } from './../../utils/icons';
import PropTypes from 'prop-types';

const GoBack = ({ navigation = false }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(navigation ? navigation : -1)}
      className="text-primary-gray lg:bg-transparent bg-white w-full fixed text-40 left-0 px-4 top-0 py-2 lg:py-0 lg:px-0 lg:left-6 lg:top-6"
    >
      {reactIcons.goback}
    </button>
  );
};

GoBack.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value boolean.
   * @default false
   */
  navigation: PropTypes.string,
};
export default GoBack;
