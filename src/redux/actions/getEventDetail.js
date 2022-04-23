import axios from 'axios';
export const GET_EVENT_DETAIL = 'GET_EVENT_DETAIL';

const getEventDetail = (id) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event/' + id);
            //console.log(event.data)
            return dispatch ({
                type: 'GET_EVENT_DETAIL',
                payload: event.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export default getEventDetail;