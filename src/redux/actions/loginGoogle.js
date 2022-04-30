import axios from 'axios';
import { LOGIN_USER } from './loginUser';

// const LOGIN_USER = 'LOGIN_USER';

const loginGoogle = (input) => {
    return async (dispatch) => {
        try {
            const json = await axios.post("/auth/login/google", input);
            return dispatch ({
                type: LOGIN_USER,
                payload: json.data
            })
        } catch (err) {
            console.log(err);
        }
    };
}

export default loginGoogle;