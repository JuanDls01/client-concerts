import axios from 'axios';
export const GET_USER = 'GET_USER';

const getUser = (id, token) => {
    return async dispatch => {
        try {
            const json = await axios.get(`http://localhost:3001/users/user/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            return dispatch({
                type: GET_USER,
                payload: json.data
            });
        } catch(err){
            console.log('getUSers reducer', err);
        }
    }
}

export default getUser;
