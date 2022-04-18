import axios from "axios";
export const REGISTER_USER = 'REGISTER_USER';

const registerUser = input => {
    console.log(input);
    try{
      return async dispatch => {
          const json = await axios.post("http://localhost:3001/auth/register", input);
        //   console.log(json.data)
          return dispatch({
              type:REGISTER_USER,
              payload:json.data
          });
      }
  }catch(err){
      console.log(err)
    }
}

export default registerUser;