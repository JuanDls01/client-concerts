//Here we import all de actions creator:
import ejemplo1 from './actionEj1';
import getEvents, { GET_EVENTS } from './getEvents';
import { filterEventsByGenre ,FILT_BY_GENRE } from './filtByGenre';
import { getGenres ,GET_GENRES_TYPES } from './getGenresTypes';

export const actions = {
    GET_EVENTS
}

const actionsCreator = {
    ejemplo1,
    getEvents
}

export default actionsCreator;