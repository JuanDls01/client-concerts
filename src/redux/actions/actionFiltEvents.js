import moment from "moment";
import axios from "axios";
export const FILT_EVENTS = 'FILT_EVENTS';

export function filtEvents (date){
    const data = {
        first: moment(date.start).format('YYYY-MM-DD'),
        second: moment(date.end).format('YYYY-MM-DD'),
        genre:date.genre
    }
    try{
      return async function(dispatch){
          const json=await axios.get("http://localhost:3000/events/filter",data);
          return dispatch({
              type:FILT_EVENTS,
              payload:json
          })
  
      }
    }catch(err){
      console.log(err)
    }
}