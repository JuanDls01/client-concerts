import axios from "axios"
export const GET_GENRES_TYPES = 'GET_GENRES_TYPES';

export function getGenres(){
    try{
    return async function(dispatch){
        const json=await axios.get("http://localhost:3001/api/genders");
        
        return dispatch({
            type:GET_GENRES_TYPES,
            payload:json
        })

     } 
   }catch(err) {
     console.log(err)
 }
}