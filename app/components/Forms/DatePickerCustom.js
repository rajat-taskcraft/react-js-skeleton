import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { reactIcons } from '../../utils/icons';
import moment from 'moment';
const DatePickerCustom = ({
  error,
  className,
  date,
  handleDate,
  icon,
  isCustomIcon,
  handleCustomIcon,
  dateFormat = 'MMMM d, yyyy',
}) => {
  // eslint-disable-next-line react/prop-types
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="flex justify-between w-full pr-8"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  return (
    <div
      className={`flex items-center px-4 border  border-zinc-200 relative rounded-md date-sm w-full ${
        error ? ' border-red-500 ' : 'border-zinc-200'
      } ${className}`}
    >
      <ReactDatePicker
        onChange={(date) => {
          handleDate(date);
        }}
        selected={date}
        dateFormat={dateFormat}
        showPopperArrow={false}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 5],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              rootBoundary: 'viewport',
              tether: false,
              altAxis: true,
            },
          },
        ]}
        customInput={<CustomInput />}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex justify-between items-center gap-6 px-2 py-1">
            <button
              className="flex-center w-9 h-9 bg-primary-100 rounded-full text-16 text-white"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {reactIcons.arrowleft}
            </button>
            <div>
              <h6 className="text-16 font-semibold leading-[1]">
                {moment(date).format('MMMM')}
              </h6>
            </div>

            <button
              className="flex-center w-9 h-9 bg-primary-100 rounded-full text-16 text-white"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {reactIcons.arrowright}
            </button>
          </div>
        )}
      />
      {icon && (
        <>
          {isCustomIcon ? (
            <span
              onClick={handleCustomIcon}
              className="text-20 text-black opacity-50 ay-center right-4 cursor-pointer pointer-events-auto z-10"
            >
              {reactIcons.close}
            </span>
          ) : (
            <span className="ay-center z-[3] pointer-events-none text-primary-gray text-18 right-2">
              {reactIcons.arrowdown}
            </span>
          )}
        </>
      )}
    </div>
  );
};
DatePickerCustom.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  dateFormat: PropTypes.string,
  date: PropTypes.any,
  icon: PropTypes.bool,
  isCustomIcon: PropTypes.bool,
  handleDate: PropTypes.func,
  handleCustomIcon: PropTypes.func,
};
export default DatePickerCustom;
