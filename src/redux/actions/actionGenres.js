import axios from "axios";
export const GET_GENRES = 'GET_GENRES';


export default function getGenres (){
    try{
      return async function(dispatch){
          const json=await axios.get(`http://localhost:3000/genre`);
          return dispatch({
              type:GET_GENRES,
              payload:json
          })
  
      }
    }catch(err){
      console.log(err)
    }
}