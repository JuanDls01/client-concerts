import axios from 'axios';

export const GET_NAME_EVENT = 'GET_NAME_EVENT';

const getNameEvent = (event, artist, stage) => {
    console.log(event)
    console.log(artist)
    console.log(stage)
    return async (dispatch) => {
        try {
            const json = await axios.get(`http://localhost:3001/event/search?event=${event}&artist=${artist}&stage=${stage}`);
            return dispatch({
                type: 'GET_NAME_EVENT',
                payload: json.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

// const getNameEvent = (payload) => {
//     console.log(payload)
//     return {
//         type: 'GET_NAME_EVENT',
//         payload
//     }
// }

export default getNameEvent;