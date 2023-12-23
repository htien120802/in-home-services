import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

function MonthYearPicker({ selectedDate, onDateChange, onlyMonth }) {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      showMonthYearPicker
      dateFormat={onlyMonth ? 'MM/yyyy' : 'MM/yyyy'}
      className="form-control"
    />
  );
}

MonthYearPicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
  onlyMonth: PropTypes.bool.isRequired,
};

export default MonthYearPicker;
