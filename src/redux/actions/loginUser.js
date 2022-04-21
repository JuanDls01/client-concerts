import axios from "axios";
export const LOGIN_USER = 'LOGIN_USER';

const loginUser = input => {
    // console.log(input);

        return async dispatch => {
            try {
                const json = await axios.post("http://localhost:3001/auth/login", input);
            // console.log(json.data)
            return dispatch({
                type:LOGIN_USER,
                payload:json.data
            });
            } catch (error) {
                console.log(error)
            }
        }
   
}

export default loginUser;
