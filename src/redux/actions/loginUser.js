import axios from "axios";
export const LOGIN_USER = 'LOGIN_USER';

const loginUser = input => {
    // console.log(input);
    try{
        return async dispatch => {
            const json = await axios.post("http://localhost:3001/auth/login", input);
            // console.log(json.data)
            return dispatch({
                type:LOGIN_USER,
                payload:json.data
            });
        }
    }catch(err){
        console.log(err)
    }
}

export default loginUser;
