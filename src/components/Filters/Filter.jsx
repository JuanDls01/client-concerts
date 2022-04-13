import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { filtEventsByDate } from "../../redux/actions/actionFiltByDate";

export default function Filter() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    dispatch( filtEventsByDate ({startDate,endDate}))
  };

  
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  );
}
