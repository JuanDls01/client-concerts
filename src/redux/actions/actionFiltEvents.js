import moment from "moment";
import axios from "axios";
export const FILT_EVENTS = 'FILT_EVENTS';

<<<<<<< HEAD
export function filtEvents (date){
    const data = {
        first: moment(date.start).format('YYYY-MM-DD'),
        second: moment(date.end).format('YYYY-MM-DD'),
=======
export default function filtEvents (date){

    const deta = {
        first:  moment(date.start).format('YYYY-MM-DD'),
        second:moment(date.end).format('YYYY-MM-DD'),
>>>>>>> dev
        genre:date.genre
    }

    try{
      return async function(dispatch){
          const json=await axios.get("http://localhost:3001/event/filter",{params:deta});
          console.log(json.data)
          return dispatch({
              type:FILT_EVENTS,
              payload:json.data
          })
  
      }
    }catch(err){
      console.log(err)
    }
}

// {
//     params: { order, filter },
//   }