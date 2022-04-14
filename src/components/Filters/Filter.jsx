import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { filtEvents } from "../../redux/actions/actionFiltEvents";
import moment from "moment"



export default function Filter() {

  // let startDate =new Date("")


  const dispatch = useDispatch();

  const genres= useSelector(state => state.genres)

  // const [genre,setGenre]=useState("")

  // const [startDate, setStartDate] = useState(new Date());

  // const [endDate, setEndDate] = useState(null);

  const [datos,setDatos] = useState({
    genre:"",
    startDate:new Date(),
    endDate:null
  })

  const onChange = (dates) => {


    setDatos({
      ...datos,
      startDate: dates[0],
      endDate:dates[1] 
    })


    dispatch(filtEvents(datos))
  };

  function handleOnChange(e){
    setDatos({
      ...datos,
      genre:e.target.value
    })
    dispatch(filtEvents(datos))
  }

  return (
    <div>
      {/* {COMPONENTE DE CALENDARIO} */}
    <DatePicker
      selected={datos.startDate}
      onChange={(e)=>onChange(e)}
      startDate={datos.startDate}
      endDate={datos.endDate}
      selectsRange
      dateFormat="yyyy-MM-dd"
      inline
    />
    {/* {COMPONENTE DE SELECTOR DE GENERO} */}

    <select onChange={(e)=>handleOnChange(e)}>
      {genres.map((el)=>(
        <option value={datos.genre}>{el}</option>
      ))}
    </select>

    </div>

    
  );
}
