 //Here we import all de actions creator:
import ejemplo1 from './actionEj1';
import getEvents, { GET_EVENTS } from './getEvents';
import { filtEventsByDate ,FILT_BY_DATE } from './actionFiltByDate';

export const actions = {
    GET_EVENTS,
    FILT_BY_DATE
}

const actionsCreator = {
    ejemplo1,
    getEvents,
    filtEventsByDate
}

export default actionsCreator;