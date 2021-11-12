import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <DatePicker
      selected={(value && new Date(value)) || null}
      maxDate={moment().toDate()}
      onChange={val => {
        onChange(name, val);
      }}
    />
  );
};

export default DatePickerField;