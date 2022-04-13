import axios from "axios";
export const FILT_BY_DATE = 'FILT_BY_DATE';

export function filtEventsByDate (date){
    try{
      return async function(dispatch){
          const json=await axios.get(``);
          return dispatch({
              type:FILT_BY_DATE,
              payload:json.data
          })
  
      }
  }catch(err){
      console.log(err)
    }
}