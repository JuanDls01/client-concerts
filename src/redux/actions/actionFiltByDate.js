import axios from "axios";
export const FILT_BY_DATE = 'FILT_BY_DATE';

export function filtEventsByDate (date){
    try{
      return async function(dispatch){
          const json=await axios.get(`http://localhost:3000/events/${date}`);
          return dispatch({
              type:FILT_BY_DATE,
              payload:json
          })
  
      }
  }catch(err){
      console.log(err)
    }
}