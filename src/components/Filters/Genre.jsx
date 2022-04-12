import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions/getGenresTypes";
import { filterEventsByGenre } from "../../redux/actions/filtByGenre";

export default function Genre() {

    const dispatch = useDispatch()
    const genres= useSelector(state=>state.genres)
    useEffect(()=>{
        dispatch(getGenres)
    })  
    function handleSelect (e) {
        dispatch(filterEventsByGenre(e.target.value))
    }

  return (
    <div>
      <select onChange={(e) => handleSelect(e)}>
        {genres && genres.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}
