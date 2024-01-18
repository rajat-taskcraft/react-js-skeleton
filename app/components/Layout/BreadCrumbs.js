import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <div key={index} className="flex  items-center">
          <Link
            className={`${
              index < data.length - 1
                ? 'hover:underline text-primary-gray text-14'
                : 'text-14'
            }`}
            to={item.path}
          >
            {item.title}
          </Link>
          {index !== data.length - 1 && (
            <span className="w-[4px] h-[4px] rounded-full bg-primary-gray flex-shrink-0 mx-2"></span>
          )}
        </div>
      ))}
    </div>
  );
};
BreadCrumbs.propTypes = {
  data: PropTypes.array,
};
export default BreadCrumbs;
