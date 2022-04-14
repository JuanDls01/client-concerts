import axios from 'axios';


          
//Here we import all de actions creator:
import getEvents, { GET_EVENTS } from './getEvents';
import getEventDetail, { GET_EVENT_DETAIL } from './getEventDetail';
import filterEventsByGenre, { FILT_BY_GENRE } from './filtByGenre';
import getGenres, { GET_GENRES_TYPES } from './getGenresTypes';
import cleanEventDetail, { CLEAN_EVENT_DETAIL } from './cleanEventDetail';

export const actions = {
    GET_EVENTS,
    GET_EVENT_DETAIL,
    GET_GENRES_TYPES,
    FILT_BY_GENRE,
    CLEAN_EVENT_DETAIL
}

const actionsCreator = {
    getEvents,
    getEventDetail,
    filterEventsByGenre,
    getGenres,
    cleanEventDetail
}

export default actionsCreator;