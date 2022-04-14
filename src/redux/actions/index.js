import axios from 'axios';

//Here we import all de actions creator:
// import ejemplo1 from './actionEj1';
import getEventDetail, { GET_EVENT_DETAIL } from './getEventDetail';
import cleanEventDetail, { CLEAN_EVENT_DETAIL } from './cleanEventDetail';
import getEvents, { GET_EVENTS } from './getEvents';
import filterEventsByGenre, { FILT_BY_GENRE } from './filtByGenre';
import getGenres , { GET_GENRES_TYPES } from './getGenresTypes';

export const actions = {
    GET_EVENTS,
    GET_EVENT_DETAIL,
    GET_GENRES_TYPES,
    FILT_BY_GENRE,
    CLEAN_EVENT_DETAIL
}

const actionsCreator = {
    // ejemplo1,
    getEvents,
    getEventDetail,
    filterEventsByGenre,
    getGenres,
    cleanEventDetail
}

// export const getEvents = () => {
//     return async (dispatch) => {
//         try {
//             const event = await axios.get('http://localhost:4000/events');
//             return dispatch ({
//                 type: 'GET_EVENTS',
//                 payload: event.data
//             })
            
//         } catch (error) {
//             console.log(error)
//         }
//     }
// };

          

export default actionsCreator;