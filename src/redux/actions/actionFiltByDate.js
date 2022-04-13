import axios from "axios";
export const FILT_BY_DATE = 'FILT_BY_DATE';

export function filtEventsByDate (date){
    try{
      return async function(dispatch){
          const json=await axios.get(`http://localhost:3001/recipes/${date}`);
          return dispatch({
              type:FILT_BY_DATE,
              payload:json.data
          })
  
      }
  }catch(err){
      console.log(err)
    }
}