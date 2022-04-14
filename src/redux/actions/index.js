 //Here we import all de actions creator:
import ejemplo1 from './actionEj1';
import getEvents, { GET_EVENTS } from './getEvents';
import { filtEvents ,FILT_EVENTS } from './actionFiltEvents';
import { getGenres,GET_GENRES } from './actionGenres';

export const actions = {
    GET_EVENTS,
    FILT_EVENTS,
    GET_GENRES
}

const actionsCreator = {
    ejemplo1,
    getEvents,
    filtEvents,
    getGenres
}

export default actionsCreator;