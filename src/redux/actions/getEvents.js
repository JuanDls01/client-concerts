import axios from 'axios';

export const GET_EVENTS = 'GET_EVENTS';

export const getEvents = () => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event');
            return dispatch ({
                type: 'GET_EVENTS',
                payload: event.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
};

export default getEvents;