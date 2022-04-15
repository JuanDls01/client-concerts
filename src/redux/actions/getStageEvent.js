import axios from 'axios';

export const GET_STAGE_EVENT = 'GET_STAGE_EVENT';

const getStageEvent = (stage) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event?stage=' + stage);
            return dispatch({
                type: 'GET_STAGE_EVENT',
                payload: event.data
            })
        }
        catch (error) {
            alert('No existen eventos!!!')
        }
    }
};

export default getStageEvent;