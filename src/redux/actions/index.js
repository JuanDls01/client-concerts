import axios from 'axios';
export const GET_EVENT_DETAIL = 'GET_EVENT_DETAIL';
export const CLEAN_EVENT_DETAIL = 'CLEAN_EVENT_DETAIL';
export const GET_EVENTS = 'GET_EVENTS';

//Here we import all de actions creator:
import ejemplo1 from './actionEj1';
import getEvents, { GET_EVENTS } from './getEvents';
import { filterEventsByGenre ,FILT_BY_GENRE } from './filtByGenre';
import { getGenres ,GET_GENRES_TYPES } from './getGenresTypes';

export const actions = {
    GET_EVENTS,
    GET_GENRES_TYPES,
    FILT_BY_GENRE
}

const actionsCreator = {
    ejemplo1,
    getEvents,
    filterEventsByGenre,
    getGenres
}

export const getEvents = () => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:4000/events');
            return dispatch ({
                type: 'GET_EVENTS',
                payload: event.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
};

export const getEventDetail = (id) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:4000/events/' + id);
            console.log(event.data)
            return dispatch ({
                type: 'GET_EVENT_DETAIL',
                payload: event.data
            })
          







        } catch (error) {
            console.log(error)
        }
    }
};

export const cleanEventDetail = () => {
    return {
        type: 'CLEAN_EVENT_DETAIL'
    }
}
