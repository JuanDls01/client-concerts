import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { filtEvents } from "../../redux/actions/actionFiltEvents";

export default function Filter() {

  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);

  const [genre, setGenre] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(null);


  const onChange = async (dates) => {
    const [start, end] = dates;
  
    setStartDate(start)
    setEndDate(end)

    dispatch(filtEvents({start,end,genre}));
  };

  function handleOnChange(e) {
    setGenre(e.target.value)
    dispatch(filtEvents({startDate,endDate,genre}));
  }

  return (
    <div>
      {/* {COMPONENTE DE CALENDARIO} */}
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      {/* {COMPONENTE DE SELECTOR DE GENERO} */}

      <select onChange={(e) => handleOnChange(e)}>
        {genres && genres.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}
