import axios from 'axios';
import { LOGIN_USER } from './loginUser';

// const LOGIN_USER = 'LOGIN_USER';

const signWGoogle = () => {
    return async (dispatch) => {
        try {
            const json = await axios.get("/auth/login/google");
            return dispatch ({
                type: LOGIN_USER,
                payload: json.data
            })
        } catch (err) {
            console.log(err);
        }
    };
}

export default signWGoogle;