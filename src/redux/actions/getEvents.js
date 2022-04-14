import axios from 'axios';

export const GET_EVENTS = 'GET_EVENTS';

const getEvents = () => async (dispatch) => {
    try {
        const json = await axios.get('http://localhost:3001/events');
        console.log(json);
        const events = json.data;
        return dispatch({
            type: GET_EVENTS,
            payload: events
        })
        }
    catch (error) {
        console.log('El getEvents falló')
    }
}

export default getEvents;