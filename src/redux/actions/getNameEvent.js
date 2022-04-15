import axios from 'axios';

export const GET_NAME_EVENT = 'GET_NAME_EVENT';

const getNameEvent = (name) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event?name=' + name);
            return dispatch({
                type: 'GET_NAME_EVENT',
                payload: event.data
            })
        }
        catch (error) {
            alert('No existen eventos!!!')
        }
    }
}

export default getNameEvent;